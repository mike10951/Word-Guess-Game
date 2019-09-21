var colors = [];
var randomizer = 0;
var blanks = [];
var guessesRemaining = 10;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Initializes the game.
initializeGame();

var userText = document.getElementById("user-text");
var lettersGuessed = [];
var currentLetter = "";




document.onkeydown = function(event){
    currentLetter = event.key;
    
    if(colors[randomizer].includes(event.key)) {
        alert("The word has an the key pressed");
    }
    else{
        guessesRemaining--;
        document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
        lettersGuessed.push(event.key);
    }
    userText.textContent = lettersGuessed.join(" ");
}

function initializeGame() {
    //Declares the array of words from which the user will have to guess a word.
    colors = ["red", "orange", "green", "blue", "violet"];
    //Generates a random number. This number will be utilized as an index for the words array.
    randomizer = Math.floor((Math.random() * 5));
    //Writes the number of letters of the random word in the HTML file with blanks.
    blanks = [];
    for(i = 0; i < colors[randomizer].length; i++) {
        blanks.push("_");
    }
    document.querySelector("#blanks").innerHTML = blanks.join(" ");
}




