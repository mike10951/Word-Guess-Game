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
var x = "";
var wins = 0;




document.onkeydown = function(event){
    currentLetter = event.key;

    for(i = 0; i < letters.length; i++){
        if(currentLetter === letters[i]){
            if(colors[randomizer].includes(event.key)) {
                alert("The word has the key pressed");
            }
                //Write the letter in the array
            else if(lettersGuessed.indexOf(currentLetter) === -1) {
                guessesRemaining--;
                if(guessesRemaining <= 0){
                    alert("Game over");
                    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
                    resetGame();
                    initializeGame();
                }
                else{
                    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
                    lettersGuessed.push(event.key); 
                }    
            }        
        }
        else {
            continue;
        }
    }
    for(i = 0; i < colors[randomizer].length; i++) {
        if(currentLetter === colors[randomizer][i]) {
            blanks[i] = currentLetter;
            document.querySelector("#blanks").innerHTML = blanks.join(" ");
            x = blanks.join("");
        }
    }

    if(colors[randomizer] === x){
        alert("You win");
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        resetGame();
        initializeGame();
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

function resetGame() {
    colors = [];
    randomizer = 0;
    blanks = [];
    guessesRemaining = 10;
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    currentLetter = "";
    lettersGuessed = [];
}




