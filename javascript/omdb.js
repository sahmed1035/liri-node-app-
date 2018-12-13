// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

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
