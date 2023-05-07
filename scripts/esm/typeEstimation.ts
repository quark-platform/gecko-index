import {
  Expression,
  PatternLike,
  ObjectExpression,
  NumericLiteral,
} from '@babel/types'
import type { Block } from 'comment-parser/primitives'

import * as comments from './comments.js'
import * as objectProperties from './objectProperties.js'

export interface BaseEstimation {
  comments?: Block[]
}

export interface ObjectEstimation extends BaseEstimation {
  type: 'object-estimation'
  keys?: objectProperties.ParsedObjectProperty[]
}

export interface NumberEstimation extends BaseEstimation {
  type: 'number-estimation'
  defaultValue?: number
}

export type TypeEstimation = ObjectEstimation | NumberEstimation

export function generateEstimation(
  expr: Expression | PatternLike
): TypeEstimation | undefined {
  if (expr.type == 'ObjectExpression') {
    return objectEstimation(expr)
  }

  if (expr.type == 'NumericLiteral') {
    return numericLiteral(expr)
  }

  return undefined
}

function objectEstimation(obj: ObjectExpression): ObjectEstimation {
  return {
    type: 'object-estimation',
    keys: obj.properties.map(objectProperties.parse).filter(Boolean),
    comments: obj.leadingComments
      ?.map((comment) => comment.value)
      .flatMap((comment) => comments.parse(comment)),
  }
}

function numericLiteral(def: NumericLiteral): NumberEstimation {
  return {
    type: 'number-estimation',
    comments: def.leadingComments
      ?.map((comment) => comment.value)
      .flatMap((comment) => comments.parse(comment)),
    defaultValue: def.value,
  }
}
