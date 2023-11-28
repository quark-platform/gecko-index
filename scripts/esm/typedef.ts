import { writeFile } from 'fs/promises'
import { basename, join } from 'path'
import ts from 'typescript'

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

  for (const [fileName, content] of Object.entries(output)) {
    const baseName = basename(fileName)
    outFiles.push(guessRawName(baseName))
    writePromises.push(writeFile(join(outFolder, baseName), content))
  }

  writePromises.push(
    writeFile(join(outFolder, '_.json'), JSON.stringify(outFiles, null, 2))
  )

  await Promise.all(writePromises)
}
