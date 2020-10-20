//* ------------------------------------------------------- *\\
//* IMPORT MODULES AND TYPES ------------------------------ *\\
const { log, inherit, validateColor } = require('../utils')
import { Role, roles } from '../data/roles'
import remoteAdminConfig from '../data/remoteAdminConfig'


//* ------------------------------------------------------- *\\
//* COMPILER FUNCTION ------------------------------------- *\\
let permObj = {}
export const remoteAdmin: Function = () => {
  log.info('Compiling RemoteAdmin config files...')

  //* Define Init Values
  let Members = []
  let roleBadges = {}
  let Roles = []
  let Permissions = []

  //* Loop through all defined RoleList
  for (const r in roles) {
    // TODO ----------------------------------------------- *\\
    // Implement Permissions ------------------------------ *\\

    //! If role is default, exit iteration and continue loop
    if (r == 'default') continue

    //* Calculate Inheritance for Role
    const role: Role = inherit(roles[r])

    //* If role has users, add to Members array
    if (role.hasOwnProperty('users')) {
      //* Loop through all Users & push Role info to MemberList
      role.users.forEach(uid => { Members.push({ [uid]: r }) })
    }

    //* Add RoleBadge Declarations
    //  Loop through all role properties
    for (const p in role) {
      // Check if property is not internal
      if (![
        'inherit',
        'perms',
        'exiledPerms',
        'users'
      ].includes(p)) {
        // If color, check color availability
        if (p == 'color')
          roleBadges[`${r}_color`] = role.color == 'rainbow' ?
            'default' :
            validateColor(role.color)

        // Else, set role value declarations
        else roleBadges[`${r}_${p}`] = role[p]
      }
    }

    //* Add to Roles array
    Roles.push(r)

    //* Add perms to permObj
    if (role.hasOwnProperty('perms')) {
      role.perms.forEach(perm => {
        if (!permObj[perm]) permObj[perm] = []
        permObj[perm].push(r)
      })
    }
  }

  //* Structure and Compile Permissions properly
  for (const p in permObj) {
    Permissions.push({ [p]: permObj[p] })
  }

  //* Return the RAConfig Object
  return {
    Members,
    ...roleBadges,
    Roles,
    Permissions,
    ...remoteAdminConfig
  }
}
