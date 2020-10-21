//* ------------------------------------------------------- *\\
//* IMPORT GLOBAL MODULES --------------------------------- *\\
const cloneDeep = require('lodash.clonedeep')


//* ------------------------------------------------------- *\\
//* CONSOLE LOGGER ---------------------------------------- *\\
const { Signale } = require('signale')
const readline = require('readline')
const chalk = require('chalk')
const ilog = new Signale({
  interactive: true,
  types: {
    upload: {
      badge: '',
      color: 'cyan',
      label: ''
    }
  }
})
export const log = {
  info (msg: string): void {
    console.log( chalk.bgBlue( chalk.black(' INFO ') ), msg )
  },
  done (msg: string): void {
    console.log( chalk.bgGreen( chalk.black(' DONE ') ), msg )
  },
  compiling (title: string, col: string, msg: string): void {
    console.log(
      chalk.blue(' COMPILE '),
      chalk[`${col}`](`${title} `),
      msg
    )
  },
  interact (msg: string): void {
    ilog.upload( msg )
  },
  clear (): void {
    if (process.stdout.isTTY) {
      const blank: string = '\n'.repeat(process.stdout.rows - 3)
      console.log(blank)
      readline.cursorTo(process.stdout, 0, 2)
      readline.clearScreenDown(process.stdout)
    }
  }
}


//* ------------------------------------------------------- *\\
//* VALIDATE ROLE COLORS ---------------------------------- *\\
const colors: string[] = [ 'pink', 'red', 'default', 'brown', 'silver', 'light_green', 'crimson', 'cyan', 'aqua', 'deep_pink', 'tomato', 'yellow', 'magenta', 'blue_green', 'orange', 'lime', 'green', 'emerald', 'nickel', 'mint', 'army_green', 'pumpkin' ]
export function validateColor (col: string): string {
  if (colors.includes(col)) return col
  throw `${col} is not a valid color`
}


//* ------------------------------------------------------- *\\
//* ROLE INHERITANCE -------------------------------------- *\\
import { roles, Role } from './data/roles'
export function inherit (role: Role): Role {
  let res: Role = cloneDeep(roles.default)

  //* If role has inheritance
  if (role.hasOwnProperty('inherit')) {
    //* Get role object being inheritted from
    let inheritRole: Role = cloneDeep(roles[role.inherit])

    //* Recursively inherit if inherited role inherits
    // If the role we inherit from also inherits from something
    // we need to grab what that role would be after it's inheritted
    if (inheritRole.hasOwnProperty('inherit')) inheritRole = inherit(inheritRole)

    //* Apply inheritted to default
    // Apply the prop values from the current role to the inheritted role
    // This basically overwrites props in the inheritted role and return it
    res = cloneDeep(applyProps(inheritRole, res))
  }

  //* Apply current role props to the default/inheritted role
  res = cloneDeep(applyProps(role, res))
  return res
}
const applyProps = (r1: Role, r2: Role): Role => {
  const res: Role = cloneDeep(r2)

  //* Loop through main role properties
  for (const p in r1) {
    //* If Array, merge with inheritted array
    if (Array.isArray(r1[p]))
      res[p] = [...new Set(r2[p] ? r1[p].concat(r2[p]) : r1[p])]

    //* Overwrite and Replace Everything Else
    else res[p] = r1[p] != null ? r1[p] : r2[p]
  }

  //* Return the result role
  return res
}

//* ------------------------------------------------------- *\\
//* FILE PATHS -------------------------------------------- *\\
// AppData/Roaming
// ├─SCP Secret Laboratory
// │ └─config
// │   └─7962
// │     ├─config_remoteadmin.txt
// │     └─config_gameplay.txt
// └─EXILED
//   └─Configs
//     ├─7962-config.yml
//     └─permissions.yml
const pathPrefix   = 'dist/AppData/Roaming'
const serverPort   = '7962'
const slConfigPath = `${pathPrefix}/SCP Secret Laboratory/config/${serverPort}`
const exiledPath   = `${pathPrefix}/EXILED/Configs`
export const configPath = {
  remoteAdmin : `${slConfigPath}/config_remoteadmin.txt`,
  gameplay    : `${slConfigPath}/config_gameplay.txt`,
  exiledConfig: `${exiledPath}/${serverPort}-config.yml`,
  exiledPerms : `${exiledPath}/permissions.yml`
}


//* ------------------------------------------------------- *\\
//* CONVERT JSON>YAML & WRITE FILES ----------------------- *\\
const fs = require('fs-extra')
const yaml = require('js-yaml')
export function convertToYAML (json: Record<string, unknown>): string {
  return yaml.safeDump(json)
}
export function writeFile (path: string, data: string): void {
  fs.outputFileSync(path, data)
}
