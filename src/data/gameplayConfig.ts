export default {
  //* ----------------------------------------------------- *\\
  //* SERVER MAIN SETTINGS -------------------------------- *\\
  "server_name": "<i><color=#FFA500>[US ENG]</color> <color=#FF0000>[FF ON]</color></i> <color=#E100FF>E</color><color=#8A00FF>p</color><color=#00A5FF>i</color><color=#00FF00>t</color><color=#FFFF00>o</color><color=#FFA500>m</color><color=#FF0000>e SCP</color> <color=#FFFFFF>Server</color>",
  "player_list_title": "default", // default = server_name
  "player_list_title_rate": "default",
  "serverinfo_pastebin_id": "h0ysYX5D",
  "server_ip": "192.154.253.153",
  "max_players": 30,
  "use_reserved_slots": true,
  "lobby_waiting_time": "default",
  "ipv4_bind_ip": "192.154.253.153",
  "ipv6_bind_ip": "::",
  "contact_email": "sepshuncontact@gmail.com",

  //* ----------------------------------------------------- *\\
  //* SPAWN SETTINGS -------------------------------------- *\\
  "minimum_MTF_time_to_spawn": 280,
  "maximum_MTF_time_to_spawn": 350,
  "maximum_MTF_respawn_amount": 15,
  "maximum_CI_respawn_amount": 15,
  "priority_mtf_respawn": true,
  "use_crypto_rng": false,
  "ci_respawn_percent": 35,
  "ci_on_start_percent": 10,
  "team_respawn_queue": 40143140314414040000,

  //* ----------------------------------------------------- *\\
  //* RANDOM STUFF ---------------------------------------- *\\
  // -1 = random
  "server_forced_class": -1,
  "map_seed": -1,

  //* ----------------------------------------------------- *\\
  //* MISC GAMEPLAY SETTINGS ------------------------------ *\\
  "afk_time": 90,
  "intercom_cooldown": 120,
  "intercom_max_speech_time": 40,
  "auto_round_restart_time": 10,
  "friendly_fire": true,
  "warhead_tminus_start_duration": 90,
  "human_grenade_multiplier": 0.7,
  "scp_grenade_multiplier": 1,
  "lock_gates_on_countdown": true,
  "isolate_zones_on_countdown": false,
  "open_doors_on_countdown": true,
  "keep_items_after_escaping": true,
  "allow_playing_as_tutorial": true,
  "disable_decontamination": false,
  "096_destroy_locked_doors": true,
  "no_holidays": false,
  "allow_disarmed_interaction": false,
  "914_mode": "DroppedAndHeld",
  "sinkhole_slow_amount": 30,
  "sinkhole_spawn_chance": 50,

  //* ----------------------------------------------------- *\\
  //* POCKET DIMENSION SETTINGS --------------------------- *\\
  "pd_exit_count": 2,
  "pd_random_exit_rids": null,
  "pd_random_exit_rids_after_decontamination": null,
  "pd_refresh_exit": false,

  //* ----------------------------------------------------- *\\
  //* DISARMER SETTINGS ----------------------------------- *\\
  "mtf_can_cuff_researchers": true,
  "ci_can_cuff_class_d": true,
  "cuffed_escapee_change_team": true,

  //* ----------------------------------------------------- *\\
  //* SPAWN PROTECTION ------------------------------------ *\\
  "spawn_protect_disable": true,
  "spawn_protect_time": 30,
  "spawn_protect_team": [1, 2],
  "spawn_protect_allow_dmg": true,

  //* ----------------------------------------------------- *\\
  //* GRENADE CHAINING ------------------------------------ *\\
  "grenade_chain_limit": 10,
  "grenade_chain_length_limit": 4,

  //* ----------------------------------------------------- *\\
  //* SECURITY & ANTICHEAT -------------------------------- *\\
  "online_mode": true,
  "ip_banning": true,
  "enable_whitelist": false,
  "hide_from_public_list": false,
  "forward_ports": true,
  "enable_query": false,
  "query_port_shift": 0,
  "query_use_IPv6": false,
  "administrator_query_password": "none",
  "enable_sync_command_binding": false,
  "anti_player_wallhack": "default",
  "ratelimit_kick": true,

  // This enforces the player to be using same IP address to connect to the game and authenticate.
  // Enabling this blocks proxies. Not enforced if player joined from IPv4 and authenticated from IPv6 or viceversa.
  // Situations with combinating IPv4 and IPv6 addresses are being checked on central servers after authentication (only for servers on public list)
  "enforce_same_ip": true,
  "no_enforcement_for_local_ip_addresses": true,

  // This enforces that the IP address used to connect to the game and authenticate must be assigned to the same Internet Service Provider (ISP).
  // Works only on servers on the public list. This is less restrictive that "enforce_same_ip" and blocks most of the proxies.
  "enforce_same_asn": true,

  // Connections ratelimiting
  // Ratelimit time windows define how often user with the same IP/UserID can initialize new connection (once per X seconds).
  "enable_ip_ratelimit": true,
  "enable_userid_ratelimit": true,
  "ip_ratelimit_window": 3,
  "userid_ratelimit_window": 5,

  //* ----------------------------------------------------- *\\
  //* DEFAULT AMMO AMOUNT --------------------------------- *\\
  "class_d_personnel_defaultammo": [10, 0, 0],
  "nine_tailed_fox_scientist_defaultammo": [120,20,20],
  "scientist_defaultammo": [20,10,0],
  "chaos_insurgency_defaultammo": [0,100,0],
  "nine_tailed_fox_lieutenant_defaultammo": [80,0,50],
  "nine_tailed_fox_commander_defaultammo": [120,0,100],
  "nine_tailed_fox_cadet_defaultammo": [40,0,100],
  "tutorial_defaultammo": [0,0,0],
  "facility_guard_defaultammo": [0,60,0],

  //* ----------------------------------------------------- *\\
  //* INVENTORY & LIMITS ---------------------------------- *\\
  "class_d_personnel_ammolimit": "default",
  "nine_tailed_fox_scientist_ammolimit": "default",
  "scientist_ammolimit": "default",
  "chaos_insurgency_ammolimit": "default",
  "nine_tailed_fox_lieutenant_ammolimit": "default",
  "nine_tailed_fox_commander_ammolimit": "default",
  "nine_tailed_fox_cadet_ammolimit": "default",
  "tutorial_ammolimit": "default",
  "facility_guard_ammolimit": "default",
  
  "itemlimit_keycard": "default",
  "itemlimit_medical_item": "default",
  "itemlimit_weapon": "default",
  "itemlimit_grenade": "default",
  "itemlimit_scp_item": "default",

  // Enable this ONLY if you use plugin or modification that provides custom whitelist.
  // This is only to mark the server on the public list as using a whitelist.
  // More information can be found in Verified Server Rules. If your server is not on the public list - ignore this.
  "custom_whitelist": false,

  // Enable this ONLY if you use plugin or modification that restricts access to the server (other than whitelist, eg. password).
  // This is only to mark the server on the public list as using access restriction.
  // More information can be found in Verified Server Rules. If your server is not on the public list - ignore this.
  "server_access_restriction": false,

  // port_queue is for NONDEDICATED SERVERS ONLY
  "port_queue": [7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784],

  // Enabling this will automatically ban IP of players on the server that receives a Global Ban by a Global Moderator. (Defaults to false)
  "gban_ban_ip": "default",

  "noclip_protection_output": false,
  "speedhack_protection_output": false,

  // Administractive actions broadcast options
  "broadcast_kicks": false,
  "broadcast_kick_text": "%nick% has been kicked from this server.",
  "broadcast_kick_duration": 5,
  "broadcast_bans": true,
  "broadcast_ban_text": "%nick% has been banned from this server.",
  "broadcast_ban_duration": 5,

  // Geoblocking
  // If your server is on the public list, please refer to Verified Server Rules for more details.
  // Modes: none, whitelist, blacklist
  "geoblocking_mode": "none",

  // If enabled, players on the whitelist are able to ignore geoblocking.
  "geoblocking_ignore_whitelisted": true,

  // ISO country codes, eg. PL, US, DE
  "geoblocking_whitelist": ["AA", "AB", "AC"],
  "geoblocking_blacklist": [ "AA", "AB", "AC"],

  // ADDED BY CONFIG VALIDATOR - 2020/09/01 01:22:26 Game version: 10.0.2
  "server_tickrate": "default",
  "smart_class_picker": "default",
  "respawn_tickets_enable": "default",
  "respawn_tickets_mtf_initial_count": "default",
  "respawn_tickets_ci_initial_count": "default",
  "respawn_tickets_mtf_classd_cuffed_escape_count": "default",
  "respawn_tickets_mtf_scientist_escape_count": "default",
  "respawn_tickets_mtf_scp_hurt_escape_count": "default",
  "respawn_tickets_ci_classd_escape_count": "default",
  "respawn_tickets_ci_scientist_cuffed_escape_count": "default",
  "respawn_tickets_ci_scientist_died_count": "default",
  "respawn_tickets_ci_scp_item_count": "default",
  "respawn_tickets_mtf_scp_hurt_interval": "default",
  "stamina_balance_use": "default",
  "stamina_balance_immunity": "default",
  "stamina_balance_regen_cd": "default",
  "stamina_balance_regen_speed": "default",
  "stamina_balance_walk_speed": "default",
  "stamina_balance_sprint_speed": "default",
  "constantly_check_afk": "default",
  "friendly_fire_multiplier": 0.5,
  "disconnect_drop": "default",
  "ragdoll_cleanup_time": "default",
  "end_round_on_one_player": "default",
  "connections_delay_time": "default",
  "same_account_joining": "default",
  "anticheat_console_output": "default",
  "preauth_challenge": "default",
  "preauth_challenge_mode": "default",
  "preauth_challenge_base_length": "default",
  "preauth_challenge_time_window": "default",
  "preauth_challenge_clean_period": "default",
  "preauth_challenge_secret_length": "default",
  "ff_detector_global_broadcast_seconds": "default",
  "ff_detector_global_adminchat_seconds": "default",
  "ff_detector_classD_can_damage_classD": "default",
  "ff_detector_webhook_url": "https://discordapp.com/api/webhooks/756993099644928120/ejTmpS4k0XgqsOGBm9NK2eI1j3TXIT6ePPG81fLtPM1a5MQtVECs68uJnLk9ykm0tbBp",
  "ff_detector_round_enabled": true,
  "ff_detector_round_kills": "default",
  "ff_detector_round_damage": "default",
  "ff_detector_round_action": "report",
  "ff_detector_round_ban_time": "default",
  "ff_detector_round_bankick_reason": "default",
  "ff_detector_round_kill_reason": "default",
  "ff_detector_round_adminchat_enable": "default",
  "ff_detector_round_adminchat_message": "default",
  "ff_detector_round_broadcast_enable": "default",
  "ff_detector_round_broadcast_message": "default",
  "ff_detector_round_webhook_report": true,
  "ff_detector_life_enabled": false,
  "ff_detector_life_kills": "default",
  "ff_detector_life_damage": "default",
  "ff_detector_life_action": "default",
  "ff_detector_life_ban_time": "default",
  "ff_detector_life_bankick_reason": "default",
  "ff_detector_life_kill_reason": "default",
  "ff_detector_life_adminchat_enable": "default",
  "ff_detector_life_adminchat_message": "default",
  "ff_detector_life_broadcast_enable": "default",
  "ff_detector_life_broadcast_message": "default",
  "ff_detector_life_webhook_report": "default",
  "ff_detector_window_enabled": false,
  "ff_detector_window_seconds": "default",
  "ff_detector_window_kills": "default",
  "ff_detector_window_damage": "default",
  "ff_detector_window_action": "default",
  "ff_detector_window_ban_time": "default",
  "ff_detector_window_bankick_reason": "default",
  "ff_detector_window_kill_reason": "default",
  "ff_detector_window_adminchat_enable": "default",
  "ff_detector_window_adminchat_message": "default",
  "ff_detector_window_broadcast_enable": "default",
  "ff_detector_window_broadcast_message": "default",
  "ff_detector_window_webhook_report": "default",
  "ff_detector_spawn_enabled": false,
  "ff_detector_spawn_window_seconds": "default",
  "ff_detector_spawn_kills": "default",
  "ff_detector_spawn_damage": "default",
  "ff_detector_spawn_action": "default",
  "ff_detector_spawn_ban_time": "default",
  "ff_detector_spawn_bankick_reason": "default",
  "ff_detector_spawn_kill_reason": "default",
  "ff_detector_spawn_adminchat_enable": "default",
  "ff_detector_spawn_adminchat_message": "default",
  "ff_detector_spawn_broadcast_enable": "default",
  "ff_detector_spawn_broadcast_message": "default",
  "ff_detector_spawn_webhook_report": "default",
  "ban_nickname_maxlength": "default",
  "ban_nickname_trimunicode": "default",
  "idle_mode_enabled": "default",
  "idle_mode_time": "default",
  "idle_mode_preauth_time": "default",
  "idle_mode_tickrate": "default",
  "report_send_using_discord_webhook": "default",
  "report_discord_webhook_url": "https://discordapp.com/api/webhooks/756992081435688960/nyOai9Pf9QWaSLf7LPQ56R3HYgMkrcPH5GnMUcUAaSSogCC0yv3WdsXsS12NBsZQldXU",
  "report_username": "default",
  "report_avatar_url": "default",
  "report_color": "default",
  "report_server_name": "default",
  "report_header": "default",
  "report_content": "default"
}
