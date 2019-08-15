# LIRI Bot App

## Overview
In this project I made a LIRI Bot App in Node. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. In this particular LIRI app the user can discover concert venues for their favorite artist, find songs/artist information with a spotify link, and discover rating information about their favorite movies. 

### Built with

- [JavaScript] (https://www.javascript.com/) - The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
- [Node.js] (https://nodejs.org/en/)- Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript.

#### Node Packages used
- [DotEnv](https://www.npmjs.com/package/dotenv) - keep the keys safe
- [Axios](https://www.npmjs.com/package/axios) - used to nake the http requests
- [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api) - music API
- [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api) - concert API
- [OMDB API](http://www.omdbapi.com)  - movie API
- [Moment](https://www.npmjs.com/package/moment)- date formatter
- [Fs](https://www.npmjs.com/package/fs) - node file system to read and write to the text files

#### APIs
- [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
- [OMDB API](http://www.omdbapi.com)
- [Spotify](https://developer.spotify.com/documentation/web-api/)

### Functionality
--- 
**1**   `concert-this` 
        
    node liri.js concert-this
        
This command takes the user search request for artist in the bandsintown api, and returns the next concert time and date for that artist, as well as location and city.In this project, I set the default artist search to "Ariana Grande".

![concert-this demo](./screenshots/concert.gif)

**2**   `spotify-this-song` 
        
    node liri.js spotify-this-song

This command takes the user search request for songs/artist in the spotify api, and returns the artist, full track name, a preview link and the album. In this project, I set the default spotify song search to "The Sign".

![spotify-this demo](./screenshots/spotify.gif)

**3**   `movie-this` 
        
    node liri.js movie-this

This command takes the user's search request for movies in the OMDB api, and returns title, cast, release date, ratings, country of origin, original language and synopsis. In this project, I set the default movie search to "Mr.Nobody".

![movie-this demo](./screenshots/movie.gif)


**4**    `do-what-it-says` 
        
    node liri.js do-what-it-says

This command will select the request in the random.txt file and produce a search. In this particular repo, we have the `spotify-this-song,"I Want it That Way". `

![do-this demo](./screenshots/read.gif)



