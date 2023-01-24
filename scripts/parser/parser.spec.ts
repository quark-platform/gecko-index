import test from 'ava'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'path'
import glob from 'tiny-glob'
import { parse } from './index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const files = await glob(join(__dirname, 'tests/*.idl'))

for (const file of files) {
  test(`Can parse ${file}`, async (t) => {
    const result = parse(await readFile(file, 'utf-8'))
    t.not(result.ast, [])
    t.deepEqual(result.errs, [])
  })
}
