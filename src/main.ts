//* ------------------------------------------------------- *\\
//* IMPORT MODULES ---------------------------------------- *\\
import compile from './gen'
import { log, configPath, convertToYAML, writeFile } from './utils'


//* ------------------------------------------------------- *\\
//* INITIALIZE VALUES ------------------------------------- *\\
let time = 0
const timer = setInterval(() => { time += 1 }, 1)


//* ------------------------------------------------------- *\\
//* TOOL FUNCTIONAL OBJECT -------------------------------- *\\
const tool = {
  build () {
    log.info('Starting build process...')

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

    //* Clear Build Timer & Log
    clearInterval(timer)
    console.log('\n'.repeat(3))
    log.done(`Finished build in ${time}ms`)
    log.clear()
  }
}


//* ------------------------------------------------------- *\\
//* CALL BUILD TOOL FUNCTIONS ----------------------------- *\\
tool.build()
