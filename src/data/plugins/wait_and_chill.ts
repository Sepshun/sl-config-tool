//* ------------------------------------------------------- *\\
//* WAIT AND CHILL CONFIG --------------------------------- *\\
export default {
  is_enabled: true,

  // Determines if any kind of message at all will be displayed
  display_wait_message: true,
  // Determines if broadcasts will be used for the message instead of hints
  // WARNING: It can mess with any other broadcasts that are being done
  use_broadcast_message: false,
  // Determines the position of the Hint on the user's screen
  // 0 = Top, 32 = Close to Middle, Default is 2
  hint_vert_pos: 8,
  // The top message that is displayed to users (Works with Unity Rich Text tags)
  top_message: "",
  // The bottom message that is displayed to users (Works with Unity Rich Text tags)
  bottom_message: "",
  // The list of roles that will be chosen to spawn as by random chance (Use RoleType names)
  roles_to_choose: ['Tutorial'],
  // Customization for the player and timer text (Works with Unity Rich Text tags)
  custom_text_values: {
    Timer: {
      XSecondsRemain: "seconds remain",
      "1SecondRemains": "second remains",
      ServerIsPaused: "The server is paused",
      RoundStarting: "The round has started"
    },
    Player: {
      XPlayersConnected: "players have connected",
      "1PlayerConnected": "player has connected"
    }
  }
}
