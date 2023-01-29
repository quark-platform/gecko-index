import type * as idlParser from './parser.js'

declare module 'gecko-index' {
  export { idlParser }

  /**
   * This references the root directory of the package. It is only intended for
   * internal usage, there is no guarantee that the internal folder structure
   * will not change
   *
   * @private
   */
  export const packageDir: string

  // ===========================================================================
  // Namespaces

  export type VersioningObject<T> = Record<string, T>
  export type NamespaceObject<T> = Record<string, T>

  export type NamespaceHistoryFile = VersioningObject<
    NamespaceObject<{
      methods: string[]
      attributes: string[]
    }>
  >

  export type NamespacesIndex = NamespaceObject<NamespaceInfo>

  export type NamespaceInfo = {
    attributes: NamespaceAttributes[]
    methods: any[]
  }

  export type NamespaceTypeDef<Type extends string> = {
    type: Type
    extAttrs: unknown[]
    generic: string
    nullable: boolean
    union: boolean
    idlType: 'any' | string
  }

  export type NamespaceAttributes = {
    type: 'attribute'
    name: string
    trivia: string
    introduced: string
    readonly: boolean
    valueType: NamespaceTypeDef<'argument-type'>
  }

  export type NamespaceMethods = {
    type: 'method'
    name: string
    trivia: string
    introduced: string
    arguments: NamespaceMethodArg[]
    special: string
    return: NamespaceMethodReturn
  }

  export type NamespaceMethodArg = {
    optional: boolean
    varadic: boolean
    name: string
    defaultValue?: {
      type: string
    }
    type: NamespaceTypeDef<'argument-type'>
  }
  export type NamespaceMethodReturn = NamespaceTypeDef<'return-type'>

  /**
   * Returns information about what was added to each namespace with each gecko
   * version
   */
  export async function getAddedNamespaces(): Promise<NamespaceHistoryFile>

  /**
   * Returns information about what was removed from each namespace with each
   * gecko version
   */
  export async function getRemovedNamespaces(): Promise<NamespaceHistoryFile>

  /**
   * Returns details about each namespace and their contents
   */
  export async function getNamespaces(): Promise<NamespacesIndex>

  // ===========================================================================
  // Legacy Modules

  export async function getLegacyModules(): Promise<any>

  // ===========================================================================
  // Interfaces

  /**
   * Lists all of the IDL files that have been indexed by the parser
   */
  export async function getInterfaceFileList(): Promise<string[]>

  export async function getInterfaceFile(
    filename: string
  ): Promise<idlParser.idlfile>

  export async function getAllInterfaces(): Promise<
    Record<string, idlParser.idlfile>
  >
}
