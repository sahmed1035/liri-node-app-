# Project Title
liri-node-app-
Assignment week 10


## Project Description
link to the video:
This is a SIRI like LIRI Bot which provides information on user's query regarding concert, songs and movies. LIRI is a _Language_ Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives users back data using API's.

### Installing
Node packages:

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









---------------------------------------------------------------------------------------------------------------------
# LIRI Bot


### BONUS

* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

* Make sure you append each command you run to the `log.txt` file. 

* Do not overwrite your file each time you run a command.

### Reminder: Submission on BCS

* Please submit the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -
### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -


