// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var moment = require("moment");

//grabing user input and joining them with a +. slicing on index 2 as 0 is node and 1 is file name.
let search = process.argv.slice(2).join("+");

// Then run a request with axios to the OMDB API with the movie specified
axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=4f84ef7d580619185eafcaecf4b9aed7`).then(
  function(response) {
    console.log("Name of the venue is: " + response.data[0].venue.name);
    console.log("Location of the venue is: " + response.data[1].venue.city + ", " +response.data[1].venue.region+", "+response.data[1].venue.country); 
    // moment(date of event).format(“MM/DD/YYYY”) 
    console.log("Date of the Event is: " + moment(response.data[2].datetime).format("MM/DD/YYYY"));
  }
);
