import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import glob from 'tiny-glob'
import { getInfo } from './shared/general.js'

const { geckoDevDir, outFolder } = await getInfo('xulElements')
const tagNames: (string | undefined)[] = []

for (const widgetFile of await glob(
  join(geckoDevDir, 'toolkit/content/widgets/**/*.js')
)) {
  const contents = await readFile(widgetFile, { encoding: 'utf-8' })

  const elementMatcher =
    /customElements\.define\("(?<tagName>[\w-]*)\", ?\w*\)/gm
  let m

  while ((m = elementMatcher.exec(contents)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === elementMatcher.lastIndex) {
      elementMatcher.lastIndex++
    }

    tagNames.push(m.groups?.tagName)
  }
}

await writeFile(
  join(outFolder, 'elements.json'),
  JSON.stringify(tagNames.filter(Boolean))
)
