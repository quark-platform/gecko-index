///<reference path="./skulpt.d.ts"/>

import { join, parse } from 'node:path'
import glob from 'tiny-glob'
import Sk from 'skulpt'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

import { getInfo } from './shared/general.js'
import { Class } from './interfaces/types.js'
import { parse as parseIDL } from './parser/index.js'
import { existsSync } from 'node:fs'

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

const failedFiles = []
const classes: Class[] = []
const typedClasses: Class[] = []

Sk.configure({ output: console.info })
for (const componentFilePath of componentFiles) {
  try {
    const fileContents = await readFile(componentFilePath, {
      encoding: 'utf-8',
    })
    const module = Sk.importMainWithBody('<stdin>', false, fileContents, false)
    const moduleClasses = Sk.ffi.remapToJs(
      module.tp$getattr(CLASSES_IDENTIFIER)
    )

    for (const moduleClass of moduleClasses) {
      if (moduleClass.type) {
        typedClasses.push({
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
    failedFiles.push(componentFilePath)
  }
}

let failedInterfaceFiles = []

for (const interfaceFile of interfaceFiles) {
  console.log(interfaceFile.path)
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

if (!existsSync(join(outFolder, '_')))
  await mkdir(join(outFolder, '_'), { recursive: true })

await writeFile(
  join(outFolder, '_', 'classes.json'),
  JSON.stringify({ failedFiles, classes, typedClasses }, null, 2)
)
