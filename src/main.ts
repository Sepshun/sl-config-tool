//* ------------------------------------------------------- *\\
//* IMPORT MODULES ---------------------------------------- *\\
import compile from './gen'
import { log, configPath, convertToYAML, writeFile } from './utils'
import gameplayConfig from './data/gameplayConfig'

//* ------------------------------------------------------- *\\
//* INITIALIZE VALUES ------------------------------------- *\\
let time = 0
const timer = setInterval(() => { time += 1 }, 1)


//* ------------------------------------------------------- *\\
//* TOOL FUNCTIONAL OBJECT -------------------------------- *\\
const tool = {
  build () {
    log.info('Starting build process...')

    //* Write SL Remote Admin File ------------------------ *\\
    writeFile(
      configPath.remoteAdmin,
      convertToYAML(compile.remoteAdmin())
    )
    log.compiling('RemoteAdmin', 'green', `Wrote to ${configPath.remoteAdmin}`)

    //* Write EXILED Perms File --------------------------- *\\
    writeFile(
      configPath.exiledPerms,
      convertToYAML(compile.exiledPerms())
    )
    log.compiling('EXILEDPerms', 'yellow', `Wrote to ${configPath.exiledPerms}`)

    //* Write GameplayConfig File ------------------------- *\\
    writeFile(
      configPath.gameplayConfig,
      convertToYAML(gameplayConfig)
    )
    log.compiling('GameplayConfig', 'red', `Wrote to ${configPath.gameplayConfig}`)

    //* Clear Build Timer & Log --------------------------- *\\
    clearInterval(timer)
    console.log('\n'.repeat(3))
    log.done(`Finished build in ${time}ms`)
    log.clear()
  }
}


//* ------------------------------------------------------- *\\
//* CALL BUILD TOOL FUNCTIONS ----------------------------- *\\
tool.build()
