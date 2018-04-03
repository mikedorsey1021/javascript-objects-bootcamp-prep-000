var playlist = {fredHammond: "glory, to glory"}

function updatePlaylist (playlist, artistName, songTitle){
  return object.assign({}, playlist, { [artistName]: songTitle})
}
