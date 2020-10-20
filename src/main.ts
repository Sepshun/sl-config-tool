//* ------------------------------------------------------- *\\
//* IMPORT MODULES ---------------------------------------- *\\
import compile from './gen'
import { configPath, convertToYAML, writeFile } from './utils'


//* ------------------------------------------------------- *\\
//* TOOL FUNCTIONAL OBJECT -------------------------------- *\\
const tool = {
  build () {
    //* Write SL Remote Admin File
    writeFile(
      configPath.remoteAdmin,
      convertToYAML(compile.remoteAdmin())
    )

    //* Write EXILED Perms File
    writeFile(
      configPath.exiledPerms,
      convertToYAML(compile.exiledPerms())
    )

    console.log('Build complete...')
  },
  upload () {}
}


//* ------------------------------------------------------- *\\
//* CALL BUILD TOOL FUNCTIONS ----------------------------- *\\
tool.build()
