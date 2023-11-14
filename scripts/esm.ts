import '@total-typescript/ts-reset'
import type {
  ClassDeclaration,
  FunctionDeclaration,
  VariableDeclarator,
} from '@babel/types'
import fastGlob from 'fast-glob'
import { parse } from '@babel/parser'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { basename, join } from 'path'
import type { Block } from 'comment-parser/primitives'

const { sync } = fastGlob

import * as commentsGen from './esm/comments.js'
import { TypeEstimation, generateEstimation } from './esm/typeEstimation.js'
import { getInfo } from './shared/general.js'
import { mkdir } from 'fs/promises'

export * from './esm/objectProperties.js'
export * from './esm/typeEstimation.js'

export interface BaseExport {
  id: string
  line: number
}

export interface Params extends BaseExport {
  type: 'params'
}

export interface Method extends BaseExport {
  type: 'method'
  kind: 'method' | 'get' | 'set' | 'constructor'
  params: Params[]
  comments?: Block[]
}

export interface ClassExport extends BaseExport {
  type: 'class'
  superClass?: string
  methods: Method[]
}

export interface VariableDeclarationExport extends BaseExport {
  type: 'variable-declaration'
  comments?: Block[]
  typeEstimation?: TypeEstimation
}

export interface FunctionDeclarationExport extends BaseExport {
  type: 'function-declaration'
  params: string[]
}

export type ExportType =
  | ClassExport
  | VariableDeclarationExport
  | FunctionDeclarationExport

const ignoreFiles = ['AppConstants.sys.mjs', 'Readerable.sys.mjs']

const { geckoDevDir, outFolder } = await getInfo('esm')

if (!existsSync(join(outFolder, 'parsed')))
  await mkdir(join(outFolder, 'parsed'), { recursive: true })

let files = []

for (const file of sync(join(geckoDevDir, './**/*.sys.mjs'))) {
  try {
    if (ignoreFiles.some((path) => file.includes(path))) continue
    if (file.includes('test')) continue
    const fileName = basename(file)
    console.log(fileName)

    let exports: ExportType[] = []
    const data = parse(readFileSync(file, { encoding: 'utf-8' }), {
      sourceType: 'module',
      sourceFilename: file,

      plugins: ['privateIn'],
    })

    writeFileSync(
      join(outFolder, `./parsed/${fileName}.json`),
      JSON.stringify(data, null, 2)
    )

    for (const bodyItems of data.program.body) {
      if (bodyItems.type != 'ExportNamedDeclaration') continue

      if (bodyItems.declaration?.type == 'ClassDeclaration')
        exports.push(handleClassDeclaration(bodyItems.declaration))

      if (bodyItems.declaration?.type == 'VariableDeclaration') {
        bodyItems.declaration.declarations.forEach((decl) => {
          const vardecl = handleVariableDeclaration(decl)
          if (vardecl) exports.push(vardecl)
        })
      }

      if (bodyItems.declaration?.type == 'FunctionDeclaration')
        exports.push(handleFunctionDeclaration(bodyItems.declaration))
    }

    writeFileSync(
      join(outFolder, `./${fileName}.json`),
      JSON.stringify(exports, null, 2)
    )
    files.push(fileName)
  } catch (e) {
    console.error(e)
    console.log('Skipping...')
  }
}

writeFileSync(join(outFolder, './_.json'), JSON.stringify(files, null, 2))

function handleClassDeclaration(declaration: ClassDeclaration): ClassExport {
  let methods: Method[] = []

  const exportId = declaration.id.name
  const exportLine = declaration.id.loc?.start.line || 0
  const superClass =
    declaration.superClass?.type == 'Identifier'
      ? declaration.superClass.name
      : undefined

  for (const item of declaration.body.body) {
    if (item.type == 'ClassMethod') {
      if (item.key.type != 'Identifier') continue

      const params: Params[] = item.params
        .map((param, index) => {
          if (param.type != 'Identifier')
            return {
              type: 'params',
              id: `param${index}`,
              line: param.loc?.start.line || 0,
            }

          return {
            type: 'params',
            id: param.name,
            line: param.loc?.start.line || 0,
          } satisfies Params
        })
        .filter(Boolean) as any

      const comments = item.leadingComments
        ?.map((comment) => comment.value)
        .flatMap((comment) => commentsGen.parse(comment))
      const kind = item.kind

      methods.push({
        type: 'method',
        id: item.key.name,
        line: item.key.loc?.start.line || 0,
        params,
        comments,
        kind,
      })
    }
  }

  return {
    type: 'class',
    id: exportId,
    superClass,
    line: exportLine,
    methods,
  }
}

function handleVariableDeclaration(
  declaration: VariableDeclarator
): VariableDeclarationExport | undefined {
  if (!(declaration.id.type === 'Identifier')) return

  let typeEstimation: TypeEstimation | undefined

  if (declaration.init) {
    const est = generateEstimation(declaration.init)
    if (est) typeEstimation = est
  }

  return {
    type: 'variable-declaration',
    id: declaration.id.name,
    line: declaration.id.loc?.start.line || 0,
    comments: declaration.leadingComments
      ?.map((comment) => comment.value)
      .flatMap((comment) => commentsGen.parse(comment)),
    typeEstimation: typeEstimation || undefined,
  }
}

function handleFunctionDeclaration(
  declaration: FunctionDeclaration
): FunctionDeclarationExport {
  const id = declaration.id?.name || ''

  return {
    type: 'function-declaration',

    id,
    line: declaration.id?.loc?.start.line || 0,

    params: declaration.params
      .map((param, index) =>
        param.type === 'Identifier'
          ? param.name
          : param.type === 'AssignmentPattern'
          ? param.left.type === 'Identifier'
            ? param.left.name
            : undefined
          : param.type === 'ObjectPattern'
          ? `param${index}`
          : undefined
      )
      .filter(Boolean),
  }
}
