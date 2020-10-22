//* ------------------------------------------------------- *\\
//* EXILED EVENTS CONFIG ---------------------------------- *\\
export default {
  is_enabled: true,

  //* Can SCP-173's movement be blocked by the Tutorial class
  can_tutorial_block_scp173: false,
  //* Can SCP-096 be enraged by the Tutorial class
  can_tutorial_trigger_scp096: false,

  //* Enable/Disable Name Tracking
  is_name_tracking_enabled: true,

  //* Should a player's inventory be dropped when set as Spectator class
  should_drop_inventory: true,

  //* Should blood be spawned
  can_spawn_blood: true,

  //* Reload the Config Files at Round Restart
  should_reload_configs_at_round_restart: true,

  //* Whether to write logs for bans
  should_log_bans: true,

  //* Max amount of sheilds SCP-096
  scp096_max_shield_amount: 500
}
