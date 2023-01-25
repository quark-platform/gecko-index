declare module 'skulpt' {
  export namespace ffi {
    type PythonBlackMagicType = { this: 'type'; is: 'nonsense' }

    function remapToJs(val: PythonBlackMagicType): any
    function remapToPy(val: object | array | string): PythonBlackMagicType
  }

  export class SkModule {
    tp$getattr(name: Sk.ffi.PythonBlackMagicType): Sk.ffi.PythonBlackMagicType
  }

  export function configure(props: {
    output: (log: string) => void
    read?: (filename: string) => string
  })
  export function importMainWithBody(
    name: '<stdin>' | string,
    dumpJS: boolean,
    body: string,
    canSuspend: boolean
  ): SkModule

  /**
   * @param {string} name name of module to import
   * @param {boolean=} dumpJS whether to output the generated js code
   * @param {string=} modname what to call the module after it's imported if
   * it's to be renamed (i.e. __main__)
   * @param {string=} suppliedPyBody use as the body of the text for the module
   * rather than Sk.read'ing it.
   * @param {Object=} relativeToPackage perform import relative to this package
   * @param {boolean=} returnUndefinedOnTopLevelNotFound return 'undefined' rather than throwing ImportError if the *first* load failed
   * @param {boolean=} canSuspend whether we may return a Suspension object
   */
  export function importModuleInternal_(
    name: string,
    dumpJS: boolean | undefined,
    modname: string | undefined,
    suppliedPyBody: string | undefined,
    relativeToPackage: object | undefined,
    returnUndefinedOnTioLevelNotFound: boolean | undefined,
    canSuspend: boolean | undefined
  ): SkModule

  export function read(filename: string, ...args: any[]): string

  export let builtinFiles: { files: Record<string, string> }
}
