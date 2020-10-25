//* ------------------------------------------------------- *\\
//* IMPORT MODULES AND TYPES ------------------------------ *\\
import { log, inherit } from '../lib/utils'
import { Role, roles } from '../data/roles'

//* ------------------------------------------------------- *\\
//* INTERFACES -------------------------------------------- *\\
interface EXILEDPerms {
  [role: string]: {
    inheritance?: string[]
    permissions?: string[]
  }
}

//* ------------------------------------------------------- *\\
//* COMPILER FUNCTION ------------------------------------- *\\
export function exiledPerms (): EXILEDPerms {
  log.compiling('EXILEDPerms', 'yellow', `Initializing compilation...`)

  //* Initialize Result Object
  const res: EXILEDPerms = {}

  //* Loop through all roles
  for (const r in roles) {
    //! If role is default, exit iteration and continue loop
    if (r == 'default') continue

    //* Calculate Inheritance for Role
    const role: Role = inherit(roles[r])

    //* Create Role Object
    res[r] = {}

    //* Set role permissions
    res[r].permissions = role.exiledPerms

    log.compiling('EXILEDPerms', 'yellow', `Compiled role: ${r}`)
  }

  //* Log Complete & Return Result Object
  log.compiling('EXILEDPerms', 'yellow', `Finished compilation`)
  return res
}
