//* ------------------------------------------------------- *\\
//* PARSE JSON AND CONVERT TO SCP SL CONFIG --------------- *\\
export default function parser(json: Record<string, unknown>): string {
  let res = ''

  //*Loop through all JSON props
  for (const i in json) {
    const prop = json[i]

    
    //*VALUE INTERPRETATION ------------------------------- *\\
    //*HANDLE NULL VALUES
    if (prop == null)
      res += `${i}: null\n`


    //*STRING | NUMBER | BOOLEAN
    else if (['string', 'number', 'boolean', 'null'].includes(typeof prop))
      res += `${i}: ${prop}\n`


    //*RACONFIG SPECIFIC TYPES
    else if (typeof prop == 'object' && ['Members', 'Roles', 'Permissions'].includes(i)) {
      // Add list init
      res += `${i}:\n`

      if (i == 'Members')
        for (const mem in prop) res += ` - ${mem}: ${prop[mem]}\n`

      if (i == 'Roles')
        for (const role in prop) res += ` - ${prop[role]}\n`

      if (i == 'Permissions') {
        // Loop through each permission
        for (const perm in prop) {
          // Construct Array List String
          let permRoles = '['
          for (const role in prop[perm]) permRoles += `${prop[perm][role]}, `
          permRoles = permRoles.slice(0, -2) + ']'

          // Append Permission Declaration and Array List String to result
          res += ` - ${perm}: ${permRoles}\n`
        }
      }
    }


    //*ARRAY (BLOCK TYPES)
    else if (
      typeof prop == 'object' &&
      [ 'port_queue',
        'geoblocking_whitelist',
        'geoblocking_blacklist'
      ].includes(i)
    ) {
      // Add list init
      res += `${i}:\n`

      for (const p in prop)
        res += ` - ${prop[p]}\n`
    }

    //*ARRAY (FLOW TYPES)
    else if (typeof prop == 'object') {
      res += `${i}: `

      let valueArr = '['
      for (const p in prop)
        valueArr += `${prop[p]}, `

      res += valueArr.slice(0, -2) + ']\n'
    }
  }

  return res
}
