import { existsSync } from 'node:fs'
import { readdir, readFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * This is the package's root directory.
 */
export const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// =============================================================================
// Namespaces

const namespacesDataFolder = resolve(packageDir, 'data', 'namespaces')

export const getAddedNamespaces = async () =>
  JSON.parse(
    await readFile(resolve(namespacesDataFolder, 'added.json'), 'utf8')
  )

export const getRemovedNamespaces = async () =>
  JSON.parse(
    await readFile(resolve(namespacesDataFolder, 'removed.json'), 'utf8')
  )

export const getNamespaces = async () =>
  JSON.parse(
    await readFile(resolve(namespacesDataFolder, 'namespaces.json'), 'utf8')
  )

// =============================================================================
// Legacy modules

export const getLegacyModules = async () =>
  JSON.parse(
    await readFile(resolve(packageDir, 'data', 'legacyModules.json'), 'utf8')
  )

// =============================================================================
// Interfaces

export const getInterfaceFileList = async () =>
  (await readdir(resolve(packageDir, 'data', 'interfaces'))).filter(
    (fileName) => fileName.endsWith('.json')
  )

export const getInterface = async (interfaceName) => {
  const interfaceData = JSON.parse(
    await readFile(
      resolve(packageDir, 'data', 'interfaces', `${interfaceName}.json`),
      'utf8'
    )
  )
  return interfaceData
}

export const getAllInterfaces = async () => {
  const interfaceFileList = await getInterfaceFileList()
  const interfaceList = await Promise.all(
    interfaceFileList.map((fileName) =>
      getInterface(fileName.replace(/\.json$/, ''))
    )
  )
  return interfaceList
}

export const getXPCOMClasses = async () => {
  const fileContents = await readFile(
    resolve(packageDir, 'data', 'interfaces', '_', 'classes.json'),
    'utf8'
  )
  return JSON.parse(fileContents)
}

// =============================================================================
// XUL Elements

export const getXULElements = async () => {
  const fileContents = await readFile(
    resolve(packageDir, 'data', 'xulElements', 'elements.json'),
    'utf8'
  )
  return JSON.parse(fileContents)
}

// =============================================================================
// ESM

export const getESMList = async () =>
  JSON.parse(
    await readFile(resolve(packageDir, 'data', 'esm', '_.json'), 'utf8')
  )

export const hasESM = (esmName) =>
  existsSync(join(packageDir, 'data', 'esm', `${esmName}.json`))

export const getESM = async (esmName) => {
  const esmData = JSON.parse(
    await readFile(
      resolve(packageDir, 'data', 'esm', `${esmName}.json`),
      'utf8'
    )
  )
  return esmData
}

// =============================================================================
// moz.build

export const getMozBuildFiles = async () =>
  JSON.parse(
    await readFile(
      resolve(packageDir, 'data', 'mozbuild', 'mozbuild.json'),
      'utf8'
    )
  )
