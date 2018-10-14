// require file with stored environment variables
require("dotenv").config();

// import the 'keys.js' file
// var keys = require('keys.js');

// grab input
var mode = process.argv[2];
var input = process.argv.slice(3).join(" ");

console.log(mode);
console.log(input);

liri();

function liri() {
  if (mode === "concert-this") {
    concert();
  } else if (mode === "spotify-this-song") {
    spotify();
  } else if (mode === "movie-this") {
    movie();
  } else {
    what();
  }
}

function concert() {
  console.log("concert function");
};

function spotify() {
  console.log("spotify function");
};

function movie() {
  console.log("movie function");
};

function what() {
  console.log("what function");
};
