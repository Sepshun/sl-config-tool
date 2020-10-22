//* ------------------------------------------------------- *\\
//* DYNAMIC CONFIG METHODS -------------------------------- *\\
import { Role, roles } from '../../data/roles'
import { inherit } from '../../utils'
const calculateActiveGroups = () => {
  //* Calculate Roles with Rainbow Colors
  const active_groups = []
  for (const r in roles) {
    //! If role is default, exit iteration and continue loop
    if (r == 'default') continue

    const role: Role = inherit(roles[r])
    if (role.color == 'rainbow') active_groups.push(r)
  }

  return active_groups
}

//* ------------------------------------------------------- *\\
//* RAINBOW TAGS CONFIG ----------------------------------- *\\
export default {
  is_enabled: true,

  //* Whether to use the custom sequence
  use_custom_sequence: false,
  custom_sequence: ['red', 'orange', 'yellow', 'green', 'blue_green', 'magenta'],

  //* How frequently the tag updates (in seconds)
  tag_interval: 0.2,

  active_groups: calculateActiveGroups()
}


