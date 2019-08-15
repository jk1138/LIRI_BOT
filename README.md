# LIRI Bot App

## Overview
In this project I made a LIRI Bot App in Node. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Expected Outcomes
The LIRI Bot was designed to produce search results based on the following commands:

* node liri.js concert-this
* node liri.js spotify-this-song
* node liri.js movie-this
* node liri.js do-what-it-says

Each command produced different search results as listed below:

* node liri.js concert-this "artist/band name"
* Name of venue
* Venue location
* Date of the event in MM/DD/YYYY format

* node liri.js spotify-this-song "song/track name"
* Artist
* Song
* Spotify song preview url
* Album

* node liri.js movie-this "movie title"
* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie
* Rotten Tomatoes Rating of the movie

* node liri.js do-what-it-says
* Print the spotify results for "I want it that way" stored in the random.txt file



### Built with

- [JavaScript] (https://www.javascript.com/) - The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
- [Node.js] (https://nodejs.org/en/)- Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript.

#### Node Packages used
- Dotenv - keep the keys safe
- Axios - used to nake the http requests
- Node-Spotify-API - music API
- Bands in Town API - concert API
- OMDB API - movie API
- Moment - date formatter
- Fs - node file system to read and write to the text files

#### APIs
- Bandsintown
- OMDB
- Spotify

### Functionality
--- 
1. concert-this 

*<command, artist name>*

Function takes the userInput (command) and the userQuery(artist), and returns the next concert time and date for that artist, as well as location and city.

######demo gif
![concert-this demo](./screenshots/concert.gif)

2. spotify-this-song

*<command, song name>*

Function takes the userInput (command) and the userQuery(song), and returns the artist, full track name, a preview link and the album.

######demo gif
![spotify-this demo](./screenshots/spotify.gif)

3. movie-this
*<command, movie name>*

Function takes the userInput (command) and the userQuery(song), and returns title, cast, release date, ratings, country of origin, original language and synopsis.

######demo gif
![movie-this demo](./screenshots/movie.gif)


4. do-this

*<command>*

This function is a wildcard that will randomly select one of the functions and produce a search. The only way to find out what it does is to try!

######demo gif
![do-this demo](./screenshots/read.gif)


