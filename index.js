// Requiring word.js file & Inquirer npm package
var Word = require("./word.js");
var prompt = require("prompt");

// Constructor containing the secret words and selecting one
var Game = function () {
    this.secretWords = ["schnauzer", "retriever", "newfoundland", "bernedoodle", "rottweiler", "beagle", "husky", "mastiff", "chihuahua"];

    this.random = this.secretWords[Math.floor(Math.random() * this.secretWords.length)];

    this.selectedWord = new Word (this.random);
}

var play = new Game();

var numGuesses = 10;

prompt.start();

// Setting up the game play
var playGame = function (lettersGuessed) {
    console.log("------------------------------------\n");
    console.log("Guesses Remaining: " + lettersGuessed);
    if (play.selectedWord.compare() == true) {
        console.log("You won!");
        return;
    } else if (lettersGuessed <= 0) {
        console.log("Game over :(");
        return;
    }

    console.log(play.selectedWord.displayWord());

    prompt.get(["guessedLetter"], function (err, result) {
        if (err) {
            return err;
        } else if (play.selectedWord.findLetter(result.guessedLetter) == false) {
            lettersGuessed--;
        }
        playGame(lettersGuessed);
    });
}

playGame(numGuesses);