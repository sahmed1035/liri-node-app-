require("dotenv").config();
var keys = require("./keys.js");
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');

/******************************************************************************************************************/
//function for`spotify-this-song`
/******************************************************************************************************************/
//creating a function displays the result of searched songs user choose

var spotifyMySong = function (functionData) { //read the file and search the song
  // By default, if no movie name is provided, search for the song "The Sign"
  if (!functionData) {
    functionData = 'The Sign';
  }
  var spotify = new Spotify(keys.spotify);

  // function for getting the artist name user searches to pass in as an argument for .map()
  var searchedArtist = function (artist) {
    return artist.name;
  }

  spotify.search({ type: 'track', query: functionData }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    //loop through every song 
    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log('Artist: ' + songs[i].artists.map(searchedArtist));
      console.log('Song Name: ' + songs[i].name);
      console.log('Song Preview: ' + songs[i].preview_url);
      console.log('Album Name: ' + songs[i].album.name);
      console.log('----------------------------------------------------------------');
    }
  });
}

/******************************************************************************************************************/
                                                  //function for`do-what-it-says`
/******************************************************************************************************************/
// fs is a core Node package for reading and writing files
const fs = require("fs");
var readRandomFile = function () {
  fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // Then split it by commas (to make it more readable)
    let dataArr = data.split(",");

    if (dataArr.length == 2) {
      myCommand(dataArr[0], dataArr[1]);
    } else if (dataArr.length == 1) {
      myCommand(dataArr[0]);
    }
  });
}

/******************************************************************************************************************/
                                          //function for `movie-this`
/******************************************************************************************************************/

var searchMyMovie = function () {
  //grabing user input and joining them with a +. slicing on index 2 as 0 is node and 1 is file
  let search = process.argv.slice(3).join("+");

  // By default, if no movie name is provided, search for the movie "Mr. Nobody"
  if (!search) {
    search = 'Mr. Nobody';
  }
  // Then run a request with axios to the OMDB API with the movie specified
  axios.get(`http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=ab961840`).then(
    function (response) {
      var movieData = [  
        "Title of the movie is: " + response.data.Title,
        "Year the movie came out is: " + response.data.Year,
        "IMDB Rating of the movie is: " + response.data.Ratings[0].Value,
        "Rotten Tomatoes Rating of the movie is: " + response.data.Ratings[1].Value,
        "Country where the movie was produced is: " + response.data.Country,
        "Language of the movie is: " + response.data.Language,
        "Plot of the movie is: " + response.data.Plot,
        "Actors in the movie are: " + response.data.Actors,
        '----------------------------------------------------------------'
      ].join("\n\n");

      //BONUS
      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", movieData, function (err) {
        if (err) throw err;
        console.log(movieData);
      });
    }
  );
}

/******************************************************************************************************************/
                                            //function for `concert-this`
/******************************************************************************************************************/

var searchMyConcert = function () {
  //grabing user input and joining them with a +. slicing on index 2 as 0 is node and 1 is file name.
  let search = process.argv.slice(3).join("+");

  // Then run a request with axios to the OMDB API with the movie specified
  axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=4f84ef7d580619185eafcaecf4b9aed7`).then(
    function (response) {
      var concertData = [
        "Name of the venue is: " + response.data[0].venue.name,
        "Location of the venue is: " + response.data[1].venue.city + ", " + response.data[1].venue.region + ", " + response.data[1].venue.country,
        // moment(date of event).format(“MM/DD/YYYY”) 
        "Date of the Event is: " + moment(response.data[2].datetime).format("MM/DD/YYYY"),
        '----------------------------------------------------------------'
      ].join("\n\n");

      //BONUS
      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", concertData, function(err) {
        if (err) throw err;
        console.log(concertData);
       
      });
    }
  );
}

/******************************************************************************************************************/
// switch statements function for the user commands
/******************************************************************************************************************/

let myCommand = function (caseData, functionData) {
  //caseData `spotify-this-song` //functionData spotifyMySong()
  switch (caseData) {
    case 'spotify-this-song':
      spotifyMySong(functionData);
      break;

    case 'movie-this':
      searchMyMovie(functionData);
      break;
    // default:
    //   console.log('Mr. Nobody.');

    case 'concert-this':
      searchMyConcert(functionData);
      break;

    case 'do-what-it-says':
      readRandomFile();
      console.log("do what it says");
      break;

  }
}

myCommand(process.argv[2], process.argv.slice(3).join(" "));
//process.argv[2] spotify-this-song //process.argv[3] songName


