//* ------------------------------------------------------- *\\
//* IMPORT MODULES AND TYPES ------------------------------ *\\
const { log, inherit } = require('../utils')
import { Role, roles } from '../data/roles'

//* ------------------------------------------------------- *\\
//* COMPILER FUNCTION ------------------------------------- *\\
export const exiledPerms: Function = () => {
  log.compiling('EXILEDPerms', 'yellow', `Initializing compilation...`)

  let res = {}

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

  log.compiling('EXILEDPerms', 'yellow', `Finished compilation`)

  return res
}
