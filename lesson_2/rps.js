const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissor'];

// ask user rock, paper, or scissor
// computer chooses random rock, paper, or scissor
// if same items then tie
// rock --> win: scissor, lose: paper
// paper --> win: rock, lose: scissor
// scissor --> win: paper, lose: rock
// display winner

// gameRules key is the user input
// gameRules value holds win or lose or tied values based on computer
const gameRules = {
  rock: { scissor: 'win', paper: 'lose', rock: 'tied'},
  paper: { rock: 'win', scissor: 'lose', paper: 'tied'},
  scissor: { paper: 'win', rock: 'lose', scissor: 'tied'}
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function chooseRandomRPS() {
  let chomputerIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[chomputerIndex];
}

prompt('Do you want to play RPS? yes or no?');
let letsPlay = readline.question().toLowerCase();

while (letsPlay[0] === 'y') {
  prompt(`Please choose ${VALID_CHOICES.join(', ')}`);
  let userInput = readline.question();

  while (!VALID_CHOICES.includes(userInput)) {
    prompt('That is not a valid choice, choose again!');
    userInput = readline.question();
  }

  let computerInput = chooseRandomRPS();
  prompt(`Computer choice: ${computerInput}`);

  prompt(`You ${gameRules[userInput][computerInput]}!`);

  prompt('What to play again? y or n');
  letsPlay = readline.question().toLowerCase();
}
