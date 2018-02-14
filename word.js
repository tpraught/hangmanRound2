// Requiring letter.js file
var Letter = require("./letter.js");

// Word Constructor
var Word = function(words) {
    this.words = words;
    this.guessedWord = [];
    this.win = false;
    this.lettersGuessed = [];

    // Method to grab the letter in the word
    this.lettersInWord = function() {
        for (var i = 0; i < this.words.length; i++) {
            var newLetter = new Letter(this.words[i]);
            this.guessedWord.push(newLetter);
        }
    }

    this.lettersInWord();

    // Method that finds the letter in the lettersGuessed array
    this.findLetter = function(guessedLetter) {
        for (var i = 0; i < this.lettersGuessed.length; i++) {
            if (guessedLetter == this.lettersGuessed[i]) {
                return true;
            }
        }

        var added = false;

        this.lettersGuessed.push(guessedLetter);

        for (var i = 0; i < this.guessedWord.length; i++) {
            if (this.guessedWord[i].letterIn(guessedLetter)) {
                this.guessedWord[i].letterShows = true;
                added = true;
            }
        }
        return added;
    }

    // Method that compares the letters in the word with the letter guessed
    this.compare = function() {
        for (var i = 0; i < this.words.length; i++) {
            if (this.words.charAt(i) != this.guessedWord[i].current) {
                return false;
            }
        }
        return true;
    }

    // Method to display the letters in an empty string
    this.displayWord = function() {
        var emptyString = "";
        for (var i = 0; i < this.guessedWord.length; i++) {
            emptyString += this.guessedWord[i].current + " ";
        }
        return emptyString;
    }
};

// var test = new Word("test");
// console.log(test.words);
// console.log(test.guessedWord);
// console.log(test.compare);
// console.log(test.displayWord());
// console.log(test.findLetter("t"));
// console.log(test.displayWord());
// console.log(test.findLetter("h"));
// console.log(test.displayWord());
// console.log(test.findLetter("e"));
// console.log(test.displayWord());
// console.log(test.findLetter("s"));
// console.log(test.displayWord());
// console.log(test.compare());

module.exports = Word;