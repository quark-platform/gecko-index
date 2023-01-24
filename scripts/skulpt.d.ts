declare module 'skulpt' {
  export namespace ffi {
    type PythonBlackMagicType = { this: 'type'; is: 'nonsense' }

    function remapToJs(val: PythonBlackMagicType): any
    function remapToPy(val: object | array | string): PythonBlackMagicType
  }

  export class SkModule {
    tp$getattr(name: Sk.ffi.PythonBlackMagicType): Sk.ffi.PythonBlackMagicType
  }

  export function configure(props: { output: (log: string) => void })
  export function importMainWithBody(
    name: '<stdin>' | string,
    dumpJS: boolean,
    body: string,
    canSuspend: boolean
  ): SkModule
}
