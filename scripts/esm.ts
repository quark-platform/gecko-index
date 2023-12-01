import '@total-typescript/ts-reset'
import fastGlob from 'fast-glob'
import { writeFile } from 'fs/promises'
import { basename, join } from 'path'
import ts from 'typescript'

const { sync } = fastGlob

import { getInfo } from './shared/general.js'

const { geckoDevDir, outFolder } = await getInfo('esm')

const guessRawName = (fileName: string) => fileName.replace('.d.mts', '.mjs')

function chunk<T>(arr: T[], chunkSize: number): T[][] {
  const res = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize))
  }
  return res
}

function compile(
  fileNames: string[],
  options: ts.CompilerOptions
): { createdFiles: Record<string, string>; errors: readonly ts.Diagnostic[] } {
  // Create a Program with an in-memory emit
  const createdFiles: Record<string, string> = {}
  const host = ts.createCompilerHost(options)
  host.writeFile = (fileName: string, contents: string) => {
    createdFiles[fileName] = contents
  }

  // Prepare and emit the d.ts files
  const program = ts.createProgram(fileNames, options, host)

  return { createdFiles, errors: program.emit().diagnostics }
}

export async function generateTypeDefinitions(
  files: string[],
  outFolder: string
) {
  let currentChunk = 0
  const chunkSize = 100
  const chunks = chunk(files, chunkSize)

  const outFiles: string[] = []
  const exports = []
  const errors = []

  for (const chunk of chunks) {
    console.log(`Compiling chunk ${currentChunk++} of ${chunks.length}`)

    const { createdFiles: output, errors: localErrors } = compile(
      // If we have already written a specific file, we don't want to overwrite
      // it
      chunk.filter((file) => !outFiles.includes(guessRawName(basename(file)))),
      {
        allowJs: true,
        declaration: true,
        emitDeclarationOnly: true,
        typeRoots: ['./node_modules', './node_modules/@types'],
      }
    )
    errors.push(...localErrors)

    for (const [fileName, content] of Object.entries(output)) {
      const baseName = basename(fileName)
      outFiles.push(guessRawName(baseName))
      await writeFile(join(outFolder, baseName), content)

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
  }

  await writeFile(
    join(outFolder, '_exports.json'),
    JSON.stringify(exports, null, 2)
  )

  await writeFile(join(outFolder, '_.json'), JSON.stringify(outFiles, null, 2))
  await writeFile(
    join(outFolder, '_.errors.json'),
    JSON.stringify(
      errors.map((diagnostic) => ({
        file: diagnostic.file?.fileName,
        source: diagnostic.source,
        message: diagnostic.messageText,
      })),
      null,
      2
    )
  )
}

// Generate type definitions
generateTypeDefinitions(sync(join(geckoDevDir, './**/*.sys.mjs')), outFolder)
