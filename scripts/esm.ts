import '@total-typescript/ts-reset'
import fastGlob from 'fast-glob'
import { join } from 'path'

const { sync } = fastGlob

import { getInfo } from './shared/general.js'
import { generateTypeDefinitions } from './esm/typedef.js'

const { geckoDevDir, outFolder } = await getInfo('esm')

// Generate type definitions
generateTypeDefinitions(sync(join(geckoDevDir, './**/*.sys.mjs')), outFolder)
