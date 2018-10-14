// require file with stored environment variables
require("dotenv").config();
var Spotify = require("node-spotify-api");

// import the 'keys.js' file for Spotify keys
var keys = require("./keys");

// request
var request = require("request");

// fs
var fs = require("fs");

// moment
var moment = require("moment");

// grab input
var mode = process.argv[2];
var input = process.argv.slice(3).join(" ");

// Spotify
var spotify = new Spotify(keys.spotify);

// divider to separate entries in log.txt
var divider =
  "\n------------------------------------------------------------\n\n";
// console.log(mode);
// console.log(input);

liri();

function liri() {
  if (mode === "concert-this") {
    concert();
  } else if (mode === "spotify-this-song") {
    spotSong();
  } else if (mode === "movie-this") {
    movie();
  } else {
    what();
  }
}

function concert() {
  // verify the concert function has been triggered
  console.log("concert function");

  var URL = `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;

  request(URL, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);

    // parse JSON data
    var jsonData = JSON.parse(body)[0];

    // nice format for ouptut
    var concertData = `***  Concert  ***

Artist: ${jsonData.lineup}
Venue: ${jsonData.venue.name}
Location: ${jsonData.venue.city}
Date: ${moment(jsonData.datetime).format("MM/DD/YYYY")}
    `;
    // log the output to the console
    console.log(concertData);

    // write output to the log file
    fs.appendFile("log.txt", concertData + divider, function(err) {
      if (err) throw err;
      console.log(concertData);
    });
  });
}

function spotSong() {
  console.log("spotify function");
  spotify.search({ type: "track", query: input }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
  });
}

function movie() {
  console.log("movie function");
  if (!input) {
    input = "mr nobody";
  }
  
  var URL = `http://www.omdbapi.com/?t=${input}&apikey=28fabb12`;

  request(URL, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);

    // parse JSON data
    var jsonData = JSON.parse(body);

    // nice format for output
    var movieData = `***  Movie  ***
Title: ${jsonData.Title}
Year: ${jsonData.Year}
IMBD Rating: ${jsonData.Ratings[0].Value}
Rotten Tomatoes Rating: ${jsonData.Ratings[1].Value}
Country: ${jsonData.Country}
Language: ${jsonData.Language}
Plot: ${jsonData.Plot}
Actors: ${jsonData.Actors}
    `;
    // log output to the console
    console.log(movieData);

    // write output to the log file
    fs.appendFile("log.txt", movieData + divider, function(err) {
      if (err) throw err;
      console.log(movieData);
    });
  });
}

function what() {
  console.log("what function");
}
