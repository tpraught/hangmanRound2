// Constructor for controlling if a letter appears or an _
var Letter = function(ltrs){

	this.current = "_"
	this.allLetters = ltrs;
	//letter appears
	this.letterShows = false;
	this.letterIn = function(letter){
		if(this.allLetters == letter){
			this.current = this.allLetters; 
			return true;
		}
			return false;
	}
	//Method that will tell us if the letter appears or if "_" will appear.
	this.revealLetter = function(){
		return this.current;
	}
};

// var x = new Letter("x");
// console.log(x.allLetters);
// console.log(x.revealLetter());
// console.log(x.letterIn("t"));
// console.log(x.letterIn("x"));
// console.log(x.revealLetter());

module.exports = Letter;