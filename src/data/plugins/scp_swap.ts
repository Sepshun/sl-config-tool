//* ------------------------------------------------------- *\\
//* SCP SWAP CONFIG --------------------------------------- *\\
export default {
  is_enabled: true,

  //* Broadcast Message ----------------------------------- *\\
  // Whether to display a message for SCPs when they spawn
  display_start_message: true,
  // Message to display
  display_message_text: "<color=yellow><b>Did you know you can swap classes with other SCP's?</b></color> Simply type <color=orange>.scpswap (role number)</color> in your in-game console (not RA) to swap!",
  // How long to display message (in seconds)
  start_message_time: 15,

  //* Swap Settings --------------------------------------- *\\
  // Whether to allow new SCPs when swapping
  swap_allow_new_scps: true,
  // How long before SCPs can no longer swap
  swap_timeout: 60,
  // How long before a swap request expires
  swap_request_timeout: 30,
  // Blacklist
  swap_blacklist: [10]
}
