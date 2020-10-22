//* ------------------------------------------------------- *\\
//* SCP UTILS CONFIG -------------------------------------- *\\
export default {
  is_enabled: true,

  // Should round autorestart if there is only one player left?
  enable_round_restart_check: true,

  // Should welcome message be shown?
  welcome_enabled: false,
  // Should decontamination message be shown?
  decontamination_message_enabled: false,

  //* SCP SUICIDE/QUIT SETTINGS --------------------------- *\\
  // Should SCPs be warned for quitting or suicide?
  enable_s_c_p_suicide_auto_warn: true,
  // Are quits as SCP considered a warnable offense?
  quit_equals_suicide: true,
  // Should SCPs be KICKED for quitting or suicide after a certain threshold?
  auto_kick_on_s_c_p_suicide: false,
  // Should SCPs be BANNED for quitting or suicide after a certain threshold?
  enabled_s_c_p_suicide_auto_ban: false,
  // Should BAN duration multiply after each ban for quit/suicide as SCP?
  multiply_ban_duration_each_ban: true,
  
  // Should player preferences be reset after badge expire?
  reset_preferenced_on_badge_expire: true,
  // Should a player with a banned name be auto-kicked?
  auto_kick_banned_names: true,
  // Should Tutorials be considered as SCP? If true they will get warned for suicides/quits
  are_tutorials_s_c_p: false,

  // Broadcast in admin chat auto kick and bans for quitting or suicide as SCP
  broadcast_sanctions: true,
  // Broadcast in admin chat auto warns for quitting or suicide as SCP
  broadcast_warns: false,

  // Autowarn message for suiciding as SCP
  suicide_warn_message: "",
  // Welcome message if enabled
  welcome_message: "",
  // Decontamination message (if enabled)
  decontamination_message: "",
  // Suicide auto-kick reason (if enabled)
  suicide_kick_message: "",
  // Auto-kick message for using a restricted nickname
  auto_kick_banned_name_message: "",
  // Suicide auto-ban reason (if enabled)
  auto_ban_message: "",
  // Message if player is not authorized to use this command
  unauthorized_nick_name_change: "",
  // Message if player is not authorized to use this command
  unauthorized_color_change: "",
  // Message if player is not authorized to use this command
  unauthorized_badge_change_visibility: "",
  // Message if player tries to change their nickname to a restricted one
  invalid_nickname_text: "",
  // Database name, change only if you are running multiple servers
  database_name: "SCPUtils",
  // Which folder should database be stored in?
  database_folder: "EXILED",
  // Welcome message duration (if enabled)
  welcome_message_duration: 12,
  // Decontamination message duration (if enabled)
  decontamination_message_duration: 10,
  // Auto-restart time if there is only one player in the server (if enabled)
  auto_restart_time: 15,
  // Auto-warn message duration (if enabled)
  auto_warn_message_duration: 30,
  // Which is the minimum number of suicides before the player may not recieve any kick or ban ignoring the SCP suicides/quit percentage? (if enabled)
  scp_suicide_tollerance: 5,
  // SCP suicide/quit base ban duration (if enabled)
  auto_ban_duration: 16,
  // Which is the max length of a nickname using the change name command?
  nickname_max_length: 32,
  // If 079 trigger tesla, for how many seconds player shouldn't get warned for suicide? (2 is enough for most servers)
  scp079_tesla_event_wait: 2,
  // Which quit/suicide percentage as SCP a player requires before getting banned (You can add tollerence in settings)
  auto_ban_threshold: 30.5,
  // Which quit/suicide percentage as SCP a player requires before getting kicked? (You can add tollerance in settings)
  auto_kick_threshold: 15.5,
  // Which colors are restricted on .scputils_change_color command?
  restricted_role_colors: ['Color1', 'Color2'],
  // Which nicknames are restricted on .scputils_change_nickname command?
  banned_nick_names: ['@everyone', '@here', 'Admin'],
  // Which ASNs should be blacklisted? Player to connect from blacklisted ASN should be whitelisted via scputils_whitelist_asn command (50889 is geforce now ASN)
  a_s_n_blacklist: [50889],
  // Which message non-whitelisted players should get while connecting from blacklisted ASN?
  asn_kick_message: "",
  // You have to add the team you want to protect from the target as key and enemy teams on the list as value, on github documentation you can see al the teams
  cuffed_immunity_players: {},
  // Indicates the protected teams should be cuffed to get the protection, if you don't add a team it will get protection regardless
  cuffed_protected_teams: [],
  // Indicates in which zones the protected team is protected
  // Zone list: Surface, Entrance, HeavyContainment, LightContainment, Unspecified
  cuffed_safe_zones: {}
}
