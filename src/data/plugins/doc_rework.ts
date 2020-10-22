//* ------------------------------------------------------- *\\
//* DOC REWORK CONFIG ------------------------------------- *\\
export default {
  is_enabled: true,

  //* Allow 049 to self-heal with a successful revive ----- *\\
  allow_doc_self_heal: false,

  //* Minimum cure amount for passive heal aura ----------- *\\
  min_cures: 3,

  //* Heal aura type -------------------------------------- *\\
  // 0 = flat HP
  // 1 = missing % HP
  heal_type: 0,

  //* Size of healing radius ------------------------------ *\\
  heal_radius: 2.6,

  //* HP Amount Zombies are Healed ------------------------ *\\
  heal_amount_flat: 15,              // Amount of HP Zombies are healed
  zom_heal_amount_percentage: 10,    // Base amount of missing % HP Zombies are healed as the start of buff
  heal_percentage_multiplier: 1.3,   // Multiplier for the ZomHealAmountPercentage value every time 049 revives
  doc_missing_health_percentage: 15, // Percentage of 049s missing health to be healed

  //* Cooldown for Active Ability ------------------------- *\\
  cooldown: 180,
  
  //* Zombie AOE settings --------------------------------- *\\
  allow_zombie_aoe: true, // Allow 049-2 to damage everyone around upon hitting an enemy
  zombie_aoe_damage: 15,  // Amount of damage to inflict within range

  //* Broadcast Messages ---------------------------------- *\\
  // Sent to 049 upon reaching min required revives
  translation_activation_message: `
    <color=red>Your passive ability is now activated.

    You now heal zombies around you every 5 seconds.</color>
  `,
  // Sent when you execute the .cr command but not 049
  translation_active_permission_denied: "You are not allowed to use this command!",
  // Sent when you execute the .cr command but you don't have the min required revives
  translation_active_not_enough_revives: "You don't have enough revives to use this ability!",
  // Sent when you execute the .cr command but it's on cooldown
  translation_active_on_cooldown: "Can't use this yet! Cooldown remaining: ",
  // Sent when there are no spectators to spawn
  translation_active_no_spectators: "Sorry, but we were unable to find any spectators for you. :(",
  // Displayed when the .cr ability cooldown has expired
  translation_active_ready_notification: `
    <color=green>You can now use your active ability.

    Use .cr in your console to spawn a zombie from the spectators.</color>
  `
}
