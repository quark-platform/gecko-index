import { parse as genParser } from './parser.js'

export const parse = (source: string) => {
  //   return genParser(source.replace(/\/\/.*?\n/g, '\n'))
  return genParser(source)
}
