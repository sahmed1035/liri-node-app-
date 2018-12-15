require("dotenv").config();
var keys = require("./keys.js");
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
// `spotify-this-song`
//creating a function displays the result of searched songs user choose

var spotifyMySong = function() {

  var spotify = new Spotify(keys.spotify);

  //var command=process.argv[2];
  //var search1=process.argv.slice(3).join(" ");
  
  // function for getting the artist name user searches
  var searchedArtist=function(artist){
   return artist.name;
  }
  
  var songName=process.argv.slice(3).join(" ");
  
  spotify.search({ type: 'track', query:songName}, function (err, data) {
   if (err) {
     return console.log('Error occurred: ' + err);
   }
  
   //loop through every song 
   var songs=data.tracks.items;
   for(var i=0; i<songs.length;i++){
     console.log(i);
     console.log('Artist: ' +songs[i].artists.map(searchedArtist));
     console.log('Song Name: ' +songs[i].name);
     console.log('Song Preview: ' +songs[i].preview_url);
     console.log('Album Name: ' +songs[i].album.name);
  
   }
  });
}




//Make it so liri.js can take in one of the following commands:

   

   //`do-what-it-says`


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// `movie-this`

//grabing user input and joining them with a +. slicing on index 2 as 0 is node and 1 is file
let search = process.argv.slice(2).join("+");

// Then run a request with axios to the OMDB API with the movie specified
axios.get(`http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=ab961840`).then(
  function(response) {
    console.log("Title of the movie is: " + response.data.Title);
    console.log("Year the movie came out is: " + response.data.Year);
    console.log("IMDB Rating of the movie is: " + response.data.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating of the movie is: " + response.data.Ratings[1].Value);
    console.log("Country where the movie was produced is: " + response.data.Country);
    console.log("Language of the movie is: " + response.data.Language);
    console.log("Plot of the movie is: " + response.data.Plot);
    console.log("Actors in the movie are: " + response.data.Actors);
  }
);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// `concert-this`

//grabing user input and joining them with a +. slicing on index 2 as 0 is node and 1 is file name.
//let search = process.argv.slice(2).join("+");

// Then run a request with axios to the OMDB API with the movie specified
axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=4f84ef7d580619185eafcaecf4b9aed7`).then(
  function(response) {
    console.log("Name of the venue is: " + response.data[0].venue.name);
    console.log("Location of the venue is: " + response.data[1].venue.city + ", " +response.data[1].venue.region+", "+response.data[1].venue.country); 
    // moment(date of event).format(“MM/DD/YYYY”) 
    console.log("Date of the Event is: " + moment(response.data[2].datetime).format("MM/DD/YYYY"));
  }
);


// switch statements for the function for user commands
var myCommand = function(caseData, functionData) { //caseData `spotify-this-song` //functionData spotifyMySong()
  switch(caseData) {
    case 'spotify-this-song' :
          spotifyMySong();
          break;
    default:  console.log('If no song is provided then your program will default to "The Sign" by Ace of Base.');



  }
}

// a function to run myCommand

var runCommand = function(argOne, argTwo) {
  myCommand(argOne, argTwo);
};

runCommand(process.argv[2], process.argv.slice(3).join(" ")); //process.argv[2] spotify-this-song //process.argv[3] songName


