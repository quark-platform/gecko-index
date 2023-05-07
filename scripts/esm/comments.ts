import * as commentParser from 'comment-parser'
import type { Block } from 'comment-parser/primitives'

export function parse(comment: string): Block[] {
  return commentParser.parse(`/**\n${comment}\n*/`)
}
