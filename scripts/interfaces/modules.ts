import Sk from 'skulpt'

const buildConfigSubsts = {
  MOZ_WIDGET_TOOLKIT: 'none',
  OS_ARCH: 'none',
  MOZ_DEBUG: true,
  MOZ_DEVTOOLS: 'all',
  CC_TYPE: 'none',
  OS_TARGET: 'none',
}

const escape = (str: string) => str.replaceAll('"', '\\"')

Sk.builtinFiles = {
  files: {
    'src/builtin/buildconfig.js': `
var $builtinmodule = function (name) {
    let buildconfig = {}

    buildconfig.substs = Sk.ffi.remapToPy(JSON.parse("${escape(
      JSON.stringify(buildConfigSubsts)
    )}"))

    return buildconfig
}
    `,
  },
}
