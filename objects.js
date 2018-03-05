var playlist = {beatles: "Help!"}

function updatePlaylist(playlist, artist, title) {
  
  return Object.assign({}, playlist, {[artist]: title })
  
}

function removeFromPlaylist(playlist, artist) {
  
  return delete playlist.artist
  
  
}