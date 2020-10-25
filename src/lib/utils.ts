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
//* ROLE INHERITANCE -------------------------------------- *\\
import { roles, Role } from '../data/roles'
import config from '../config'
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

    //* Calculate BaseRole Badge Inheritance
    if (config.append_base_role_badge && !role.base_role) {
      role.badge += ` (${inheritRole.badge})`
    }

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
//* CONVERT JSON>YAML & WRITE FILES ----------------------- *\\
const fs = require('fs-extra')
import yaml = require('js-yaml')
import configParser from './configConverter'
export function convertToSLConfig (json: Record<string, unknown>): string {
  return configParser(json)
}
export function convertToYAML (json: Record<string, unknown>): string {
  return yaml.safeDump(json, { lineWidth: -1 })
}
export function writeFile (path: string, data: string): void {
  fs.outputFileSync(path, data)
}


//* ------------------------------------------------------- *\\
//* GAME VALUES & TYPES ----------------------------------- *\\
// ItemTypes | All Valid Game Items | String Literal Type
export type ItemTypes =
  "None"|
  "Coin"|
  "KeycardJanitor"|
  "KeycardScientist"|
  "KeycardScientistMajor"|
  "KeycardZoneManager"|
  "KeycardGuard"|
  "KeycardSeniorGuard"|
  "KeycardContainmentEngineer"|
  "KeycardNTFLieutenant"|
  "KeycardNTFCommander"|
  "KeycardChaosInsurgency"|
  "KeycardO5"|
  "GunCom15"|
  "GunProject90"|
  "GunE11SR"|
  "GunMP7"|
  "GunLogicer"|
  "MicroHID"|
  "GrenadeFrag"|
  "GrenadeFlash"|
  "Ammo556"|
  "Ammo762"|
  "Ammo9mm"|
  "Medkit"|
  "Adrenaline"|
  "Painkillers"|
  "Radio"|
  "Flashlight"|
  "Disarmer"|
  "WeaponManagerTablet"|
  "SCP500"|
  "SCP207"|
  "SCP018"|
  "SCP268"
// ClassTypes | All Valid Game Classes | String Literal Type
export type ClassTypes =
  "ClassD"|
  "Scientist"|
  "FacilityGuard"|
  "NtfCadet"|
  "NtfLieutenant"|
  "NtfCommander"|
  "NtfScientist"|
  "ChaosInsurgency"|
  "Scp173"|
  "Scp049"|
  "Scp0492"|
  "Scp096"|
  "Scp106"|
  "Scp93953"|
  "Scp93989"|
  "Spectator"|
  "Tutorial"

//* ------------------------------------------------------- *\\
//* CASE CONVERSIONS -------------------------------------- *\\
export const _snakeToPascal = (string: string): string => {
  return string.split("/")
    .map(snake => snake.split("_")
      .map(substr => substr.charAt(0)
        .toUpperCase() +
        substr.slice(1))
      .join(""))
    .join("/")
}

//* ------------------------------------------------------- *\\
//* NAME COLOR UTILS -------------------------------------- *\\
const RGBToHex = (rgb: string): string => {
  // Choose Correct Separator
  const sep = rgb.indexOf(",") > -1 ? "," : " "

  // Convert String into Array
  const res = rgb.substr(4).split(")")[0].split(sep)

  let r = (+res[0]).toString(16),
      g = (+res[1]).toString(16),
      b = (+res[2]).toString(16)

  if (r.length == 1) r = "0" + r
  if (g.length == 1) g = "0" + g
  if (b.length == 1) b = "0" + b

  return `#${r}${g}${b}`
}
import grad from 'gradient-color'
export const gradientName = (name: string, gradient: string[]|Record<string, unknown>[] = ['#0084FF', '#F76EE8']): string => {
  const nameArr = name.split('')
  const gradArr = grad(gradient, nameArr.length)
  let res = ''
  
  nameArr.forEach((char: string, i: number) => {
    char == ' ' ?
      res += ' ' :
      res += `<color=${RGBToHex(gradArr[i])}>${char}</color>`
  })

  return res
}
// Rainbow Name
export const rainbowName = (name: string, rainbow: string[] = [
  '#E100FF',
  '#8A00FF',
  '#00A5FF',
  '#00FF00',
  '#FFFF00',
  '#FFA500'
]): string => {
  const nameArr = name.split('')
  let res = ''

  nameArr.forEach((char: string, i: number) => {
    const id = i - (rainbow.length * (Math.ceil((i / rainbow.length) + 0.1) - 1))
    char == ' ' ?
      res += ' ' :
      res += `<color=${rainbow[id]}>${char}</color>`
  })

  return res
}

//* ------------------------------------------------------- *\\
//* TRIM SERVER NAME -------------------------------------- *\\
import dedent from 'ts-dedent'
export const trimMultilineString = (str: string): string => {
  return dedent(str)
    .split(/\r?\n/)
    .map(row => row.trim())
    .join('\n')
    .replace(/(\r\n|\n|\r)/gm, '')
}
