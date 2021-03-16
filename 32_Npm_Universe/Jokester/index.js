const jokes = require("give-me-a-joke");
const color = require("colors");
// const cowsay = require("cowsay");

jokes.getRandomDadJoke(function(joke) {
    console.log(joke.red);
});