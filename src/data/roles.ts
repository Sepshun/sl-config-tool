//* ------------------------------------------------------- *\\
//* ROLE LIST --------------------------------------------- *\\
export const roles: RoleList = {
  //* ----------------------------------------------------- *\\
  //* GLOBAL DEFAULT VALUES ------------------------------- *\\
  default: {
    badge: 'DEFAULT ROLE',
    color: 'silver',
    cover: true,
    hidden: false,
    kick_power: 0,
    required_kick_power: 1
  },

  //* ----------------------------------------------------- *\\
  //* OWNER/CO-OWNER ROLES -------------------------------- *\\
  owner: {
    badge: 'OWNER (SHE/HER)',
    color: 'rainbow',
    kick_power: 255,
    required_kick_power: 255,
    inherit: 'admin',
    base_role: true,
    perms: [
      'FriendlyFireDetectorImmunity',
      'FriendlyFireDetectorTempDisable',
      'SetGroup',
      'PermissionsManagement',
      'ServerConsoleCommands',
      'ServerConfigs',
      'PlayerSensitiveDataAccess'
    ],
    users: ['76561198084288286@steam'] // Jess | Sepshun
  },
  coowner: {
    badge: 'CO-OWNER (HE/HIM)',
    color: 'rainbow',
    kick_power: 255,
    required_kick_power: 255,
    inherit: 'admin',
    base_role: true,
    users: ['76561198120759344@steam'] // Kyle Arrow
  },

  //* ----------------------------------------------------- *\\
  //* BASE STAFF ROLES ------------------------------------ *\\
  admin: {
    badge: 'ADMIN',
    color: 'rainbow',
    kick_power: 1,
    required_kick_power: 2,
    inherit: 'mod',
    base_role: true,
    perms: [
      'AdminChat',
      'ViewHiddenGlobalBadges',
      'Announcer',
      'Effects',
      'LongTermBanning',
      'ForceclassWithoutRestrictions',
      'GivingItems',
      'WarheadEvents',
      'RespawnEvents',
      'RoundEvents',
      'GameplayData',
      'FacilityManagement',
      'PlayersManagement',
      'Noclip',
      'AFKImmunity'
    ],
    exiledPerms: [
      'at.*',
      'ee.*'
    ]
  },
  mod: {
    badge: 'MODERATOR',
    color: 'yellow',
    kick_power: 0,
    required_kick_power: 1,
    base_role: true,
    perms: [
      'KickingAndShortTermBanning',
      'BanningUpToDay',
      'ForceclassSelf',
      'ForceclassToSpectator',
      'Overwatch',
      'ViewHiddenBadges',
      'Broadcasting'
    ],
    exiledPerms: [
      'at.jail',
      'at.kick',
      'at.sm'
    ]
  },

  //* ----------------------------------------------------- *\\
  //* PLAYER SPECIFIC ROLES ------------------------------- *\\
  duck: {
    badge: 'SPOOKY DUCK',
    inherit: 'admin',
    users: ['76561199013251051@steam']
  },
  mozzie: {
    badge: 'MOZZIE',
    color: 'aqua',
    inherit: 'mod',
    users: ['76561198345000624@steam']
  },
  perrshu: {
    badge: 'FRUIT BASKET',
    color: 'lime',
    inherit: 'mod',
    users: ['76561198121191392@steam']
  },
  captain: {
    badge: 'HEAVY FROM TF2',
    color: 'red',
    inherit: 'mod',
    users: ['76561198195245190@steam']
  },
  thiccboi: {
    badge: 'PURPLE GUY',
    color: 'magenta',
    inherit: 'mod',
    users: ['76561198134444585@steam']
  }
  // gothybitch: {
  //   badge: 'GOTHY',
  //   color: 'aqua',
  //   inherit: 'mod',
  //   users: ['76561199084896538@steam']
  // }
}

//* ------------------------------------------------------- *\\
//* ROLE INTERFACES --------------------------------------- *\\
export interface Role {
  badge: string
  color?: 'rainbow'|'default'|'red'|'pink'|'brown'|'silver'|'light_green'|'crimson'|'cyan'|'aqua'|'deep_pink'|'tomato'|'yellow'|'magenta'|'blue_green'|'orange'|'lime'|'green'|'emerald'|'nickel'|'mint'|'army_green'|'pumpkin'
  cover?: boolean
  hidden?: boolean
  kick_power?: number
  required_kick_power?: number
  inherit?: string
  base_role?: boolean
  perms?: string[]
  exiledPerms?: string[]
  users?: string[]
}
export interface RoleList {
  [name: string]: Role
}
