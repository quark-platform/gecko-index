///<reference path="./skulpt.d.ts"/>

import { join, parse } from 'node:path'
import glob from 'tiny-glob'
import Sk from 'skulpt'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

import { getInfo } from './shared/general.js'
import { Class } from './interfaces/types.js'
import { parse as parseIDL } from './parser/index.js'
import { existsSync, readFileSync } from 'node:fs'
import './interfaces/modules.js'

const CLASSES_IDENTIFIER = Sk.ffi.remapToPy('Classes')
const INVALID_INTERFACES: string[] = [
  'nsIBrowserProfileMigrator' /* No longer contained in central */,
  'nsIAboutWindowsMessages' /* I don't even know what is going on here. Might just fix itself */,
  'cld' /* Not even standard webidl */,
]
const FROM_INVALID_PATH = (path: string) =>
  path.includes('accessible') ||
  path.includes('other-licenses') ||
  path.includes('testing') ||
  path.includes('third_party')

const { geckoDevDir, geckoVersion, outFolder } = await getInfo('interfaces')

let componentFiles = await glob(join(geckoDevDir, '**/components.conf'))
componentFiles = componentFiles.filter((file) => !file.includes('/browser/'))

const interfaceFileLocations = await glob(join(geckoDevDir, '**/*.idl'))
const interfaceFiles = interfaceFileLocations
  .map((file) => ({
    path: file,
    name: parse(file).name,
  }))
  .filter(
    ({ name, path }) =>
      !INVALID_INTERFACES.includes(name) && !FROM_INVALID_PATH(path)
  )

const failedFiles: any[] = []
const classes: Class[] = []
const interfacedClasses: Class[] = []

Sk.configure({ output: console.info })
for (const componentFilePath of componentFiles) {
  try {
    const fileContents = await readFile(componentFilePath, {
      encoding: 'utf-8',
    })

    const module = Sk.importMainWithBody(
      '<stdin>',
      false,
      `
import buildconfig    

def defined(_any):
      return True

# From: https://searchfox.org/mozilla-central/source/xpcom/components/gen_static_components.py#58
class ProcessSelector:
    ANY_PROCESS = 0x0
    MAIN_PROCESS_ONLY = 0x1
    CONTENT_PROCESS_ONLY = 0x2
    ALLOW_IN_GPU_PROCESS = 0x4
    ALLOW_IN_VR_PROCESS = 0x8
    ALLOW_IN_SOCKET_PROCESS = 0x10
    ALLOW_IN_RDD_PROCESS = 0x20
    ALLOW_IN_UTILITY_PROCESS = 0x30
    ALLOW_IN_GPU_AND_MAIN_PROCESS = ALLOW_IN_GPU_PROCESS | MAIN_PROCESS_ONLY
    ALLOW_IN_GPU_AND_SOCKET_PROCESS = ALLOW_IN_GPU_PROCESS | ALLOW_IN_SOCKET_PROCESS
    ALLOW_IN_GPU_AND_VR_PROCESS = ALLOW_IN_GPU_PROCESS | ALLOW_IN_VR_PROCESS
    ALLOW_IN_GPU_VR_AND_SOCKET_PROCESS = (
        ALLOW_IN_GPU_PROCESS | ALLOW_IN_VR_PROCESS | ALLOW_IN_SOCKET_PROCESS
    )
    ALLOW_IN_RDD_AND_SOCKET_PROCESS = ALLOW_IN_RDD_PROCESS | ALLOW_IN_SOCKET_PROCESS
    ALLOW_IN_GPU_RDD_AND_SOCKET_PROCESS = (
        ALLOW_IN_GPU_PROCESS | ALLOW_IN_RDD_PROCESS | ALLOW_IN_SOCKET_PROCESS
    )
    ALLOW_IN_GPU_RDD_SOCKET_AND_UTILITY_PROCESS = (
        ALLOW_IN_GPU_PROCESS
        | ALLOW_IN_RDD_PROCESS
        | ALLOW_IN_SOCKET_PROCESS
        | ALLOW_IN_UTILITY_PROCESS
    )
    ALLOW_IN_GPU_RDD_VR_AND_SOCKET_PROCESS = (
        ALLOW_IN_GPU_PROCESS
        | ALLOW_IN_RDD_PROCESS
        | ALLOW_IN_VR_PROCESS
        | ALLOW_IN_SOCKET_PROCESS
    )
    ALLOW_IN_GPU_RDD_VR_SOCKET_AND_UTILITY_PROCESS = (
        ALLOW_IN_GPU_PROCESS
        | ALLOW_IN_RDD_PROCESS
        | ALLOW_IN_VR_PROCESS
        | ALLOW_IN_SOCKET_PROCESS
        | ALLOW_IN_UTILITY_PROCESS
    )

class BackgroundTasksSelector:
    NO_TASKS = 0x0
    ALL_TASKS = 0xFFFF


${fileContents}`,
      false
    )

    const moduleClasses = Sk.ffi.remapToJs(
      module.tp$getattr(CLASSES_IDENTIFIER)
    )

    for (const moduleClass of moduleClasses) {
      if (moduleClass.interfaces) {
        interfacedClasses.push({
          componentFile: componentFilePath,
          ...moduleClass,
        })
        continue
      }

      classes.push({
        componentFile: componentFilePath,
        ...moduleClass,
      })
    }
  } catch (e) {
    failedFiles.push({ path: componentFilePath, e })
  }
}

console.log('Components done')

let failedInterfaceFiles = []

for (const interfaceFile of interfaceFiles) {
  const fileContents = await readFile(interfaceFile.path, 'utf-8')
  const { errs, ast } = parseIDL(fileContents)

  if (errs.length != 0) {
    console.error(
      'Error with',
      interfaceFile.path,
      JSON.stringify(errs, null, 2)
    )
    failedInterfaceFiles.push({ file: interfaceFile, errs })
    continue
  }

  await writeFile(
    join(outFolder, `${interfaceFile.name}.json`),
    JSON.stringify(ast, null, 2)
  )
}

console.log('IDL done')

if (!existsSync(join(outFolder, '_')))
  await mkdir(join(outFolder, '_'), { recursive: true })

await writeFile(
  join(outFolder, '_', 'classes.json'),
  JSON.stringify({ failedFiles, classes, interfacedClasses }, null, 2)
)
