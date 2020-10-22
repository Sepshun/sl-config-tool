//* ------------------------------------------------------- *\\
//* STALKY106 CONFIG -------------------------------------- *\\
export default {
  is_enabled: true,
  preferences: {
    announce_ready: true,
    cooldown: 80,
    initial_cooldown: 110,
    // Should SCP-106 automatically teleport when stalking, or should he teleport manually?
    auto_tp: true,
    // Delay for the auto-teleportation. Ignored if auto_tp is false.
    auto_delay: 0.2,
    // Forces SCP-106 to be teleported.
    // If he's jumping it will "wait" until he's on the ground to teleport him.
    // Frame-perfect trick allows for SCP-106 to move while teleporting, set to false if players abuse it.
    force_auto_tp: false,
    // ignore_teams and ignore_roles will ignore said teams and roles when searching for a player to stalk
    ignore_teams: [
      'SCP',
      'CHI',
      'TUT'
    ],
    ignore_roles: [
      'Scp106',
      'Scp079'
    ],
    // Changes behaviour of stalk by only allowing to stalk players in the same zone
    same_zone_only: true
  },
  translations: {
    role_display_names: {
      Scp173: "<color=#F00>SCP-173</color>",
      ClassD: "<color=#FF8E00>Class D</color>",
      Spectator: "Spectator",
      Scp106: "<color=#F00>SCP-106</color>",
      NtfScientist: "<color=#0096FF>NTF Scientist</color>",
      Scp049: "<color=#F00>SCP-049</color>",
      Scp096: "<color=#f00>SCP-096</color>",
      Scp0492: "<color=#f00>Zombie</color>",
      NtfLieutenant: "<color=#0096FF>NTF Lieutenant</color>",
      NtfCommander: "<color=#0096FF>NTF Commander</color>",
      NtfCadet: "<color=#0096FF>NTF Cadet</color>",
      Tutorial: "Tutorial",
      FacilityGuard: "<color=#59636f>Facility Guard</color>",
      Scp93953: "<color=#f00>SCP-939-53</color>",
      Scp93989: "<color=#f00>SCP-939-89</color>"
    },
    welcome_broadcast: "<size=80><color=#0020ed><b>Stalk</b></color></size>\nIn this server, you can <color=#0020ed><b>stalk</b></color> humans by double-clicking the portal creation button in the <b>[TAB]</b> menu.",
    stalk_ready: "\n<b><color=#0020ed><b>Stalk</b></color> is <color=#00e861>ready</color></b>.\n<size=30>Double-click your portal creating tool to use it.</size>",
    double_click: "\nClick the portal creation tool again to <color=#ff0955><b>Stalk</b></color> a random player.",
    stalk_message: "\n<i>You will <color=#0020ed><b>stalk</b></color> <b>$player</b>, who is a $class</i>\n<size=30><color=#FFFFFF66>Cooldown: $cd</color></size>",
    no_targets_left: "\nNo targets found.",
    console_info: "Stalky106 enables additional functionality to SCP-106 by giving him the ability to place a portal to a random player, bringing him closer to the lore",
    cooldown_message: "\nYou have to wait $time seconds to use <color=#0020ed><b>Stalk</b></color>.",
    error: "\nAn error ocurred. Please, try it again."
  }
}
