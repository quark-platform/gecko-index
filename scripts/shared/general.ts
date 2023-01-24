import { mkdir, readFile } from 'fs/promises'
import { resolve } from 'path'

export async function getInfo(dataName: string) {
  if (process.argv.length == 1) {
    throw new Error(
      'Expected path to gecko-dev to be provided as the first arg'
    )
  }

  const geckoDevDir = resolve(process.cwd(), process.argv[2])
  const outFolder = resolve(process.cwd(), 'data', dataName)

  return {
    outFolder,
    geckoDevDir,
    geckoVersion: (
      await readFile(resolve(geckoDevDir, 'browser', 'config', 'version.txt'), {
        encoding: 'utf-8',
      })
    ).trim(),
    _outFolderCreation: await mkdir(outFolder, { recursive: true }),
  }
}
