//* ------------------------------------------------------- *\\
//* IMPORT MODULES ---------------------------------------- *\\
import config from './config'
import compile from './gen'
import { log, convertToYAML, convertToSLConfig, writeFile } from './lib/utils'
import gameplayConfig from './data/gameplayConfig'


//* ------------------------------------------------------- *\\
//* FILE PATHS -------------------------------------------- *\\
const slConfigPath = `${config.build_prefix}/SCP Secret Laboratory/config/${config.server_port}`
const exiledPath   = `${config.build_prefix}/EXILED/Configs`
export const configPath = {
  remoteAdmin   : `${slConfigPath}/config_remoteadmin.txt`,
  gameplayConfig: `${slConfigPath}/config_gameplay.txt`,
  exiledConfig  : `${exiledPath}/${config.server_port}-config.yml`,
  exiledPerms   : `${exiledPath}/permissions.yml`
}


//* ------------------------------------------------------- *\\
//* TOOL FUNCTIONAL OBJECT -------------------------------- *\\
const tool = {
  build () {
    log.info('Starting build process...')

    //* COMPILE VANILLA CONFIG FILES ---------------------- *\\
    //  Write SL Remote Admin File ------------------------  \\
    if (config.compile_remoteadmin) {
      writeFile( configPath.remoteAdmin, convertToSLConfig(compile.remoteAdmin()) )
      log.compiling('RemoteAdmin', 'green', `Wrote to ${configPath.remoteAdmin}`)
    }

    //  Write GameplayConfig File -------------------------  \\
    if (config.compile_gameplay) {
      writeFile( configPath.gameplayConfig, convertToSLConfig(gameplayConfig) )
      log.compiling('GameplayConfig', 'red', `Wrote to ${configPath.gameplayConfig}`)
    }


    //* COMPILE EXILED CONFIG FILES ----------------------- *\\
    //  Write EXILED Perms File ---------------------------  \\
    if (config.compile_exiledperms) {
      writeFile( configPath.exiledPerms, convertToYAML(compile.exiledPerms()) )
      log.compiling('EXILEDPerms', 'yellow', `Wrote to ${configPath.exiledPerms}`)
    }

    //  Write ExiledPlugins File --------------------------  \\
    if (config.compile_exiledplugins) {
      writeFile( configPath.exiledConfig, convertToYAML(compile.exiledPlugins()) )
      log.compiling('EXILEDPlugins', 'magenta', `Wrote to ${configPath.exiledConfig}`)
    }


    //* CLEAR TIMER & LOG --------------------------------- *\\
    console.log('\n'.repeat(3))
    log.done(`Finished build`)
    log.clear()
  }
}


//* ------------------------------------------------------- *\\
//* CALL BUILD TOOL FUNCTIONS ----------------------------- *\\
tool.build()
