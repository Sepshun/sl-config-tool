//* ------------------------------------------------------- *\\
//* BUILD TOOL CONFIG ------------------------------------- *\\
import { rainbowName } from './lib/utils'
export default {
  //* BASE GAME CONFIGURATION ----------------------------- *\\
  server_name: `
    <i>
      <color=#FFA500>[US EAST] </color>
    </i>
    <b>
      ${rainbowName('Epitome')}
      <color=#FF0000> SCP </color>
      <color=#FFFFFF>Server</color>
    </b>
  `,
  server_ip: '192.154.253.153',              // IP Address & Port
  server_port: '7962',                       // Server Port Number
  server_info: 'h0ysYX5D',                   // Pastebin Link for ServerInfo
  contact_email: 'sepshuncontact@gmail.com', // Contact Email Address (required for verification)
  max_players: 30,                           // Maximum Number of Players
  scp914_mode: 'DroppedAndHeld',             // SCP-914 Mode | Check <> for more info
  friendly_fire: true,                       // Friendly Fire
  friendly_fire_mult: 0.5,                   // Damage Multiplier for Friendly Fire (1 is full damage)


  //* SL-CONFIG-TOOL CONFIGURATION ------------------------ *\\
  //  Path to export compiled files to
  build_prefix: 'build/config',

  //  Enable/Disable certain compilation features
  //  VANILLA Config Files     // These are config files for the 
  compile_gameplay: true,      // compiles config_gameplay.txt
  compile_remoteadmin: true,   // compiles config_remoteadmin.txt
  //  EXILED Mod Loader Files  // Disable these if your server doesn't use EXILED
  compile_exiledperms: true,   // compiles permissions.yml for EXILED Mod Loader
  compile_exiledplugins: true, // compiles <server_port>_config.yml for EXILED Mod Loader

  //  Appends the inheritted base role's badge onto non-base roles within parentheses
  //  EX: "DUCK (ADMIN)" or "KIWI (MODERATOR)"
  append_base_role_badge: false,


  //* FTP UPLOAD CONFIGURATION ---------------------------- *\\
  ftp_directory: 'AppData/Roaming'
}
