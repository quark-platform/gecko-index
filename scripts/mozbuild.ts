import pkg from 'fast-glob'
import { join } from 'path'

const { sync } = pkg

import { getInfo } from './shared/general.js'
import { readFileSync, writeFileSync } from 'fs'

const EXTRA_JS_MODULE_REGEX =
  /EXTRA_JS_MODULES(?<name>[\w\.\[\]"-]*) \+?= \[(?<items>[\n "\w\.,/-]*)]/gm

const { geckoDevDir, outFolder } = await getInfo('mozbuild')
const mozbuildFiles: Mozbuild[] = []

for (const file of sync(join(geckoDevDir, '**/moz.build'))) {
  if (file.includes('test')) continue
  const contents = readFileSync(file, { encoding: 'utf-8' })

  const path = file.replace(geckoDevDir, '')
  const modules: Record<string, string[]> = {}

  const extraRegex = new RegExp(EXTRA_JS_MODULE_REGEX)
  let groups

  while ((groups = extraRegex.exec(contents)) !== null) {
    if (groups.index === extraRegex.lastIndex) extraRegex.lastIndex++

    const name =
      (groups as any).groups.name == ''
        ? '/'
        : (groups as any).groups.name
            .replace(/\["(?<t>[\w-]*)"\]/gm, '.$<t>')
            .replaceAll('.', '/')

    const items = (groups as any).groups.items
      .replaceAll('\n', '')
      .replaceAll(' ', '')
      .replaceAll('"', '')
      .split(',')
      .filter((item: string) => item !== '')

    modules[name] = modules[name] ? [...modules[name], ...items] : items
  }

  mozbuildFiles.push({
    path,
    isGRE: !path.includes('/browser'),
    modules,
  })
}

writeFileSync(
  join(outFolder, 'mozbuild.json'),
  JSON.stringify(mozbuildFiles, null, 2)
)

export interface Mozbuild {
  path: string
  isGRE: boolean
  modules: Record<string, string[]>
}
