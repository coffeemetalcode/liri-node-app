# liri-node-app

A command line app for finding answers to your questions.

**Features**

Search for:
* Upcoming concerts
* Songs from Spotify
* Movies by title
* A random concert, Spotify, or movie title search based on text contained in a local file.

**Dependencies**

* dotenv
* moment
* node-spotify-api
* request

Do 'npm install' from the program's directory. See 'package.json' and the [npm docs](https://docs.npmjs.com/) for more information.

**Usage**

node liri [_arg 1, arg 2_]

arg 1             | arg 2              | result
----------------- | ------------------ | ------------------
concert-this      | _artist name_      | returns the artist's name and the venue, location, and date of an upcoming concert, and writes the result to a log file
spotify-this-song | _song name_        | returns the song's artist, title, Spotify preview link, and song's album and writes the result to a log file
movie-this        | _movie title_      | returns the movie's title, year, consumer ratings, country, language, plot, and actors and writes the result to a log file
do-what-it-says   | _null_             | loads input arguments from the file _random.txt_ and returns the expected result
help              | _null_             | prints the README.md file to the console