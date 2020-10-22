//* ------------------------------------------------------- *\\
//* 575 CONFIG -------------------------------------------- *\\
export default {
  is_enabled: true,

  // Whether or not randomly timed events should occur. If false, all events will be at the same interval apart.
  random_events: true,
  // Whether or not tesla gates should be disabled during blackouts.
  disable_teslas: true,
  // The delay before the first event of each round (in seconds)
  initial_delay: 300,
  // The minimum number of seconds a blackout event can last
  duration_mix: 30,
  // The maximum number of seconds a blackout event can last.
  // If random_events is disabled, this will be the duration for every event.
  duration_max: 90,
  // The minimum amount of seconds between each event.
  delay_min: 180,
  // The maximum amount of seconds between each event.
  // If random_events is disabled, this will be the delay between every event.
  delay_max: 500,
  // The percentage change that SCP-575 events will occur in any particular round.
  spawn_chance: 45,
  // Whether or not people in dark rooms should take damig if they have no light source in their hand
  enable_keter: true,
  // Whether or not blackouts should only affect Heavy Containment
  only_heavy: false,
  // Whether or not SCP-575's "roar" should happen after a blackout starts.
  voice: true,
  // How much damage per 5 seconds should be inflicted if EnableKeter is set to true
  keter_damage: 10,
  // Whether or not the plugin is enabled
  // Name displayed in player's death information
  killed_by: "SCP-575",
  // Message said by C.A.S.S.I.E.
  cassie_message_start: "facility power system failure in 3 . 2 . 1 .",
  cassie_keter: "pitch_0.15 .g7",
  cassie_message_end: "facility power system now operational",

  // Broadcast shown when a player is damaged by SCP-575
  damage_broadcast: "You were damaged by SCP-575! Equip a flashlight!",
  damage_broadcast_duration: 5
}
