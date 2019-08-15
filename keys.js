//Instead of a console.log that keys.js has been added to the liri.js file
// I added directions for search terms and the inital console.log when loading 'node liri.js' in the terminal.
console.log(
  "\n Welcome! Here are some search options:" +
  "\n 1) node liri.js concert-this <artist/band name here>" +
  "\n 2) node liri.js spotify-this-song <song name here>" +
  "\n 3) node liri.js movie-this <movie name here>"+
  "\n 4) node liri.js do-what-it-says"

);

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
}