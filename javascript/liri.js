//At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

// require("dotenv").config();

//Add the code required to import the `keys.js` file and store it in a variable.
//You should then be able to access your keys information like so.

// var spotify = new Spotify(keys.spotify);

const keys = require('./keys.js');
var moment = require('moment');
moment().format();



let search = process.argv.slice(2).join("+");
//const address = process.argv.slice(2).join(" ");
//activity 17
