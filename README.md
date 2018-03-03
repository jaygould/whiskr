# Whiskr

A small side project I built to explore building a project without the use of a front-end framework. The project is available at [https://whiskr.co.uk](https://whiskr.co.uk), and is a Tinder-style swiping application to "yay" or "nay" a selection of cats and dogs.

## How it's built

This project is built using Javascript on the front end with Webpack to bundle the files, and Pug for templating. The back end uses a Node Express server to handle serving pages and connecting to a MongoDB database. I've also developed a [small web scraper](https://github.com/jaygould/command-scraper) to retrieve the pics of the lovely cats and dogs which are programatically stored on my server and in the database via a command line approval interface.

## To do

* Image on welcome screen
