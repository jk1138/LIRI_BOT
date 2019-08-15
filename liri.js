//==========================================================================================================
//=========================================== NPM packages =================================================
//==========================================================================================================

require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var moment= require ("moment");
moment().format();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify (keys.spotify);


var command = process.argv[2];
var search = process.argv.slice(3).join(" ");
//=================================================================================================================================================
//============================== (1) node liri.js concert-this <artist/band name here> ============================================================
//=================================================================================================================================================

function concert() {
  //****************** Bands In Town API ********************
  var API1 = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"

  axios.get(API1).then(
    function (response) {
      for (var i = 0; i < response.data.length; i++) {
        var date = moment(response.data[0].datetime).format("MM/DD/YYYY");
        console.log("================================================");
        console.log("Lineup: " + response.data[i].lineup[i]);
        console.log("Venue is at : " + response.data[i].venue.name + ", in " + response.data[i].venue.city + ", " + response.data[i].venue.region);
        console.log("The date of the event is on: " + date);
      }
  }).catch(function (error) {
    console.log(error)
  });
};

//=================================================================================================================================================
//=============================== (2) node liri.js spotify-this-song <song name here> =============================================================
//=================================================================================================================================================

//*********** (API key in .env + keys.js file) ****************

function song() {
  spotify.search({
    type: 'track',
    query: search
  }, function (err, data) {
    if (err) {
      return console.log('ERROR! Search could not find results for: ' + err);
    } else {
      var results = data.tracks.items
      for (i = 0; i < results.length; i++) {
        console.log("================================================");
        console.log("Artist: " + results[i].artists[0].name);
        console.log("Song Name: " + results[i].name);
        console.log("Follow this Spotify Link: " + results[i].external_urls.spotify);
        console.log("Album Name: " + results[i].album.name);
      };
    };
  });
};

//=================================================================================================================================================
//=============================== (3) node liri.js movie-this <movie name here> ===================================================================
//=================================================================================================================================================
function movie() {
  //****************** OMDB movies API ********************
  var API2 = "https://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy"

  axios.get(API2).then(
    function (response) {
      console.log("================================================");
      console.log("Title of the Movie: " + response.data.Title);
      console.log("Year Released: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Country Produced in: " + response.data.Country);
      console.log("Language of the Movie: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Cast: " + response.data.Actors);
    }
  )
}
//=================================================================================================================================================
//================================= (4) node liri.js do-what-it-says ==============================================================================
//=================================================================================================================================================
function read() {
  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    song(data);
  });
};

//=================================================================================================================================================
//======================================================== Switch Cases ===========================================================================
//=================================================================================================================================================
switch (command) {
  case "concert-this":
    if (!search) {
      search = "Ariana Grande" //default
    }
    concert();
    break;
  case "spotify-this-song":
    if (!search) {
      search = "The Sign" //default
    }
    song();
    break;
  case "movie-this":
    if (!search) {
      search = "Mr. Nobody" //default

    }
    console.log(search)
    movie();
    break;
  case "do-what-it-says":
    if (!search) {
      search = "I Want It That Way" //default
    }
    read();
    break;
}