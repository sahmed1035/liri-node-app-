# Project Title
liri-node-app-
Assignment week 10


## Project Description
link to the video:
This is a SIRI like LIRI Bot which provides information on user's query regarding concert, songs and movies. LIRI is a _Language_ Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives users back data using API's.

### Installing
Node packages:
After downloading the app, type in npm install. It will install the the required packages. 
   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

   * [OMDB API](http://www.omdbapi.com) 
    
   * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)


#### Running the tests

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

It  can take in one of the following commands:

1.  * `node liri.js concert-this <artist/band name here>`
    * Gives back the following information in the terminal/bash window.
      * Name of the venue 
      * Venue location
      * Date of the Event (uses moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`
 
  * Gives back the following information in the terminal/bash window.
      * Artist(s)
      * The song's name
      * A preview link of the song from Spotify
      * The album that the song is from
      * If no song is provided then your program will default to "The Sign" by Ace of Base.
   

  3. `node liri.js movie-this '<movie name here>'`

   * Gives back the following information in the terminal/bash window.
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

 4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

## Built With

* node.js
* json.js
* inquirer.js

## Authors

* Syeda Ahmed
* Portfolio Link: 










