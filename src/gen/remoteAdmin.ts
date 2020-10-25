//* ------------------------------------------------------- *\\
//* IMPORT MODULES AND TYPES ------------------------------ *\\
import { log, inherit } from '../lib/utils'
import { Role, roles } from '../data/roles'
import remoteAdminConfig from '../data/remoteAdminConfig'

//* ------------------------------------------------------- *\\
//* INTERFACES -------------------------------------------- *\\
interface RAConfig {
  Members: {
    [steamID: string]: string
  }
  Roles: string[]
  Permissions: {
    [permission: string]: string[]
  }
  [extraProp: string]: any
}

//* ------------------------------------------------------- *\\
//* COMPILER FUNCTION ------------------------------------- *\\
const permObj = {}
export function remoteAdmin (): RAConfig {
  log.compiling('RemoteAdmin', 'green', 'Initializing compilation...')

  //* Define Init Values
  const Members = {}
  const roleBadges = {}
  const Roles = []
  // const Permissions = {}

  //* Loop through all defined RoleList
  for (const r in roles) {
    //! If role is default, exit iteration and continue loop
    if (r == 'default') continue

    //* Calculate Inheritance for Role
    const role: Role = inherit(roles[r])

    //* If role has users, add to Members array
    if (role.hasOwnProperty('users')) {
      //* Loop through all Users & push Role info to MemberList
      role.users.forEach(uid => { Members[uid] = r })
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
          roleBadges[`${r}_color`] = role.color.replace('rainbow', 'default')

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

    log.compiling('RemoteAdmin', 'green', `Compiled role: ${r}`)
  }

  //* Structure and Compile Permissions properly
  // for (const p in permObj) {
  //   Permissions.push({ [p]: permObj[p] })
  // }

  log.compiling('RemoteAdmin', 'green', `Finished compilation`)

  //* Return the RAConfig Object
  return {
    Members,
    ...roleBadges,
    Roles,
    Permissions: permObj,
    ...remoteAdminConfig
  } as RAConfig
}
