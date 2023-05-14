import { ObjectMethod, ObjectProperty, SpreadElement } from '@babel/types'
import type { Block } from 'comment-parser/primitives'

import * as comments from './comments.js'
import { TypeEstimation, generateEstimation } from './typeEstimation.js'

export interface ObjectPropertyBase {
  line: number
  id: string
  comments?: Block[]
}

export interface ObjectPropertyProperty extends ObjectPropertyBase {
  type: 'object-property'
  typeEstimation?: TypeEstimation
}

export interface ObjectPropertyMethod extends ObjectPropertyBase {
  type: 'object-method'
  kind: 'method' | 'get' | 'set'
  params: string[]
}

export type ParsedObjectProperty = ObjectPropertyProperty | ObjectPropertyMethod

export function parse(
  property: ObjectProperty | ObjectMethod | SpreadElement
): ParsedObjectProperty | undefined {
  switch (property.type) {
    case 'ObjectProperty': {
      if (property.key.type !== 'Identifier') {
        console.warn('Non-identifier object property key. Skipping...')
        return
      }
      return objectProperty(property)
    }

    case 'ObjectMethod': {
      if (property.key.type !== 'Identifier') {
        console.warn('Non-identifier object property key. Skipping...')
        return
      }
      return objectMethod(property)
    }
  }

  return undefined
}

function objectProperty(property: ObjectProperty): ObjectPropertyProperty {
  if (property.key.type !== 'Identifier')
    throw new Error('ObjectProperty key must be an identifier')

  return {
    type: 'object-property',

    line: property.key.loc?.start.line || 0,
    id: property.key.name,
    comments: property.leadingComments
      ?.map((comment) => comment.value)
      .flatMap((comment) => comments.parse(comment)),

    typeEstimation: generateEstimation(property.value),
  }
}

function objectMethod(property: ObjectMethod): ObjectPropertyMethod {
  if (property.key.type !== 'Identifier')
    throw new Error('ObjectProperty key must be an identifier')

  return {
    type: 'object-method',

    line: property.key.loc?.start.line || 0,
    id: property.key.name,
    comments: property.leadingComments
      ?.map((comment) => comment.value)
      .flatMap((comment) => comments.parse(comment)),

    kind: property.kind,
    params: property.params
      .map((param) =>
        param.type === 'Identifier'
          ? param.name
          : param.type === 'AssignmentPattern'
          ? param.left.type === 'Identifier'
            ? param.left.name
            : undefined
          : undefined
      )
      .filter(Boolean),
  }
}
