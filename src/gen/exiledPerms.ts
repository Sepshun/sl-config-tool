//* ------------------------------------------------------- *\\
//* IMPORT MODULES AND TYPES ------------------------------ *\\
const { inherit } = require('../utils')
import { Role, roles } from '../data/roles'

//* ------------------------------------------------------- *\\
//* COMPILER FUNCTION ------------------------------------- *\\
export const exiledPerms: Function = () => {
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
  }

  return res
}
