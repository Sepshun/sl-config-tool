//* ------------------------------------------------------- *\\
//* IMPORT MODULES AND TYPES ------------------------------ *\\
import { log } from '../lib/utils'
const fs = require('fs-extra')
const path = require('path')

//* ------------------------------------------------------- *\\
//* COMPILER FUNCTION ------------------------------------- *\\
interface EXILEDPlugins {
  [pluginName: string]: {
    is_enabled: boolean
    [configValue: string]: any
  }
}
export function exiledPlugins (): EXILEDPlugins {
  log.compiling('EXILEDPlugins', 'magenta', `Initializing compilation...`)

  //* Import all PluginConfigs dynamically ------------------ *\\
  const pluginConfigs: EXILEDPlugins = {}
  const pluginConfigDir = path.resolve(__dirname, '../data/plugins')
  fs.readdirSync(pluginConfigDir).forEach(item => {
    if (!item.includes('.map'))
      pluginConfigs[item.replace('.js', '')] = require(`${pluginConfigDir}/${item}`).default
  })

  //* Log Complete & Return Result Object
  log.compiling('EXILEDPlugins', 'magenta', `Finished compilation`)
  return pluginConfigs
}
