//* ------------------------------------------------------- *\\
//* COMMON UTILITIES CONFIG ------------------------------- *\\
// TODO --------------------------------------------------- *\\
// Compile dynamic config into solid config object
// | One idea for this is to write a compilation function
// | that would deep clone the config object
// | It could then compile to the proper structure
// | and delete the properties it pulled those from (player_inventory & recipies_914)
const config = {
  is_enabled: true,
  debug: false,

  //* Should 049 be able to speak to human classes -------- *\\
  scp049_speech: true,

  //* Timed Broadcast ------------------------------------- *\\
  // Message to Broadcast
  timed_broadcast: "<color=white>Psst. Make sure to read the <color=red>RULES</color>, please.</color>",
  // Duration to Broadcast Message (in seconds)
  timed_broadcast_duration: 5,
  // Delay between each Broadcast (in seconds)
  timed_broadcast_delay: 600,

  //* Message sent to players that just joined ------------ *\\
  join_message: "<color=white>Welcome to <color=#E100FF>E</color><color=#8A00FF>p</color><color=#00A5FF>i</color><color=#00FF00>t</color><color=#FFFF00>o</color><color=#FFA500>m</color><color=#FF0000>e</color>, %player%! Read the <color=red>rules</color> and <color=cyan>enjoy</color> your stay!</color>",
  join_message_duration: 15,

  //* Auto-Nuke Settings ---------------------------------- *\\
  autonuke_time: 900,  // Timer from round start (in seconds)
  autonuke_lock: true, // Locked nukes can't be turned off

  //* Default Inventory Settings -------------------------- *\\
  player_inventory: {
    class_d: {
      Coin: 100,
      Flashlight: 20
    },
    chaos: {
      KeycardChaosInsurgency: 100,
      GunLogicer: 100,
      MedKit: 100,
      Painkillers: 100
    },
    scientist: {
      KeycardScientist: 100,
      Medkit: 100
    },
    guard: {
      KeycardGuard: 100,
      GunMP7: 100,
      Medkit: 100,
      WeaponManagerTablet: 100,
      Disarmer: 100,
      GrenadeFlash: 100,
      Radio: 100
    },
    cadet: {
      KeycardSeniorGuard: 100,
      GunProject90: 100,
      WeaponManagerTablet: 100,
      Radio: 100,
      Disarmer: 100,
      Medkit: 100
    },
    lieutenant: {
      KeycardNTFLieutenant: 100,
      GunE11SR: 100,
      WeaponManagerTablet: 100,
      GrenadeFrag: 100,
      Radio: 100,
      Disarmer: 100,
      Medkit: 100
    },
    commander: {
      KeycardNTFCommander: 100,
      GunE11SR: 100,
      WeaponManagerTablet: 100,
      GrenadeFrag: 100,
      Radio: 100,
      Disarmer: 100,
      Adrenaline: 100
    },
    ntf_sci: {
      KeycardNTFLieutenant: 100,
      GunE11SR: 100,
      WeaponManagerTablet: 100,
      GrenadeFrag: 100,
      Radio: 100,
      Medkit: 100,
      Disarmer: 100
    }
  } as InventoryList,

  //* SCP-914 Custom Recipes ------------------------------ *\\
  scp914_recipes: {
    items: {
      rough: {
        Coin: { None: 100 }
      },
      coarse: {
        Coin: {
          None: 75,
          KeycardJanitor: 25
        }
      },
      one_to_one: {
        Adrenaline: { Medkit: 100 },
        Medkit: { Adrenaline: 100 }
      },
      fine: {
        Coin: {
          KeycardScientist: 40,
          Flashlight: 30,
          Painkillers: 20,
          SCP207: 10,
          SCP268: 10,
          SCP018: 5
        }
      },
      very_fine: {
        Coin: {
          GunCom15: 12,
          Keycard05: 10,
          SCP500: 6,
          None: 60
        },
        Flashlight: { GrenadeFlash: 10 }
      }
    },
    classes: {
      rough: {
        ClassD: { Scp0492: 100 },
        Scientist: { Scp0492: 100 },
        FacilityGuard: { Scp0492: 100 },
        NtfCadet: { Scp0492: 100 },
        NtfLieutenant: { Scp0492: 100 },
        ChaosInsurgency: { Scp0492: 100 },
        Scp0492: { Spectator: 100 },
      },
      coarse: {},
      one_to_one: {
        Scientist: { ClassD: 100 }
      },
      fine: {},
      very_fine: {
        ClassD: {
          Scientist: 40,
          Spectator: 20
        },
        Scientist: { Spectator: 20 },
        FacilityGuard: {
          NtfCadet: 40,
          Spectator: 20
        },
        NtfCadet: {
          NtfLieutenant: 40,
          Spectator: 20
        },
        NtfLieutenant: { Spectator: 20 },
        NtfCommander: { Spectator: 20 },
        NtfScientist: { Spectator: 20 }
      }
    }
  } as SCP914Recipes,

  //* Cleanup Settings ------------------------------------ *\\
  ragdoll_cleanup_delay: 0,
  ragdoll_cleanup_only_pocket: false,
  item_cleanup_delay: 0,
  item_cleanup_only_pocket: false,

  //* Health Settings ------------------------------------- *\\
  // Amount gained upon kill
  health_on_kill: {
    Scp173: 125,
    Scp049: 150,
    Scp0492: 30,
    Scp096: 0,
    Scp106: 25,
    Scp93953: 130,
    Scp93989: 130
  } as ClassHealth,
  health_values: {
    Scp173: 3400,
    NtfCommander: 200
  } as ClassHealth
}

//* ------------------------------------------------------- *\\
//* DYNAMIC CONFIG METHODS -------------------------------- *\\
import { ClassTypes, ItemTypes, _snakeToPascal } from '../../utils'
const scp914Setting = (s: string) => { return s.replace('one_to_one', 'oneto_one') }
const compileConfig = () => {
  //* ----------------------------------------------------- *\\
  //* Compile Inventory Lists ----------------------------- *\\
  // Loop through all classes inventories
  const inventories = {}
  for (const className in config.player_inventory) {
    const inv = config.player_inventory[className]
    const value = []

    // Loop through each item
    for (const itemName in inv)
      // Push declaration string to value arr
      value.push(`${itemName}:${inv[itemName]}`)

    inventories[`${className}_inventory`] = value
  }
  delete config.player_inventory


  //* ----------------------------------------------------- *\\
  //* Compile SCP-914 Recipes ----------------------------- *\\
  const recipes = { scp914_class_changes: {} }

  //* Compile Custom SCP-914 Recipes ---------------------- *\\
  //* Item Recipes
  for (const settingName in config.scp914_recipes.items) {
    const setting = config.scp914_recipes.items[settingName]
    const value = []

    // Loop through all recipes
    for (const inputName in setting)               // Loop through each input item
      for (const outputName in setting[inputName]) // Loop through each output item
        value.push(`${inputName}:${outputName}:${setting[inputName][outputName]}`)

    recipes[`scp914_${scp914Setting(settingName)}_chances`] = value
  }
  //* Class Recipes
  for (const settingName in config.scp914_recipes.classes) {
    const setting = config.scp914_recipes.classes[settingName]
    const value = []

    // Loop through all recipes
    for (const inputClass in setting)                // Loop through each input item
      for (const outputClass in setting[inputClass]) // Loop through each output item
        value.push(`${inputClass}:${outputClass}:${setting[inputClass][outputClass]}`)

    recipes.scp914_class_changes[_snakeToPascal(settingName)] = value
  }
  delete config.scp914_recipes

  return {
    ...config,
    ...inventories,
    ...recipes
  }
}
export default { ...compileConfig() }

//* ------------------------------------------------------- *\\
//* TYPES AND INTERFACES ---------------------------------- *\\
type SCP914Setting = 'rough'|'coarse'|'one_to_one'|'fine'|'very_fine'
interface InventoryList {
  [className: string]: {
    [itemName in ItemTypes]?: number;
  };
}
interface SCP914Recipes {
  items: {                          // Item Recipes
    [setting in SCP914Setting]: {     // 914 Setting
      [itemName in ItemTypes]?: {       // Input Item
        [itemName in ItemTypes]?: number; // Output Item: Chance
      };
    };
  };
  classes: {                          // Class Changes
    [setting in SCP914Setting]: {       // 914 Setting
      [className in ClassTypes]?: {       // Input Class
        [className in ClassTypes]?: number; // Output Class: Chance
      };
    };
  };
}
type ClassHealth = {
  [className in ClassTypes]: number;
}
