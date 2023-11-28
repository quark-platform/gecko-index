import '@total-typescript/ts-reset'
import fastGlob from 'fast-glob'
import { writeFile } from 'fs/promises'
import { basename, join } from 'path'
import ts from 'typescript'

const { sync } = fastGlob

import { getInfo } from './shared/general.js'

const { geckoDevDir, outFolder } = await getInfo('esm')

const guessRawName = (fileName: string) => fileName.replace('.d.mts', '.mjs')

function compile(
  fileNames: string[],
  options: ts.CompilerOptions
): Record<string, string> {
  // Create a Program with an in-memory emit
  const createdFiles: Record<string, string> = {}
  const host = ts.createCompilerHost(options)
  host.writeFile = (fileName: string, contents: string) => {
    createdFiles[fileName] = contents
  }

  // Prepare and emit the d.ts files
  const program = ts.createProgram(fileNames, options, host)
  program.emit()

  return createdFiles
}

export async function generateTypeDefinitions(
  files: string[],
  outFolder: string
) {
  const output = compile(files, {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
  })

  const outFiles = []
  const writePromises = []
  const exports = []

  for (const [fileName, content] of Object.entries(output)) {
    const baseName = basename(fileName)
    outFiles.push(guessRawName(baseName))
    writePromises.push(writeFile(join(outFolder, baseName), content))

    const regex = /^export \w+ (?<keyword>\w*)/gm
    let match
    while ((match = regex.exec(content)) !== null) {
      if (match.groups?.keyword) {
        exports.push({
          name: match.groups.keyword,
          path: guessRawName(baseName),
        })
      }
    }
  }

  writePromises.push(
    writeFile(
      join(outFolder, '_exports.json'),
      JSON.stringify(exports, null, 2)
    )
  )
  writePromises.push(
    writeFile(join(outFolder, '_.json'), JSON.stringify(outFiles, null, 2))
  )

  await Promise.all(writePromises)
}

// Generate type definitions
generateTypeDefinitions(sync(join(geckoDevDir, './**/*.sys.mjs')), outFolder)
