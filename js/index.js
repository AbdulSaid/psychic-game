// Creates an array that lists out all of the options (Every Letter in the Alphabet).
var alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Creating variables to hold the number of wins, losses, and guesses left, guesses so far. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var youGuessSoFar = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  console.log(event);
  // Determines which key was pressed.
  var userGuess = event.key;
  youGuessSoFar.push(userGuess);

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if (userGuess === computerGuess) {
    alert('Congrats, You have Won The Game');
    wins++;
    guessesLeft = 9;
    youGuessSoFar = [];
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  } else {
    guessesLeft--;
  }
  if (guessesLeft === 0) {
    alert('You Lost...Better Luck Next Time');
    losses++;
    youGuessSoFar = [];
    guessesLeft = 9;
  }

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.

  // Set the inner HTML contents of the #game div to our html string
  document.getElementById('wins').innerHTML = 'Wins: ' + wins;
  document.getElementById('losses').innerHTML = 'Losses: ' + losses;
  document.getElementById('guessesLeft').innerHTML =
    'Guesses Left: ' + guessesLeft;
  document.getElementById('yourGuessSoFar').innerHTML =
    'Your Guesses so Far: ' + youGuessSoFar + ' ';
};
