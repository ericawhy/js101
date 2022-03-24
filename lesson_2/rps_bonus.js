const readline = require('readline-sync');

const VALID_CHOICES = ['r', 'p', 'ss', 'l', 's'];

// if playerschoice === computerschoice then tied
// maybe only list out the winning combos so what is not found will default
// to player loosing
// rock -> wins over: scissors, lizard
// paper -> wins over: rock, spock
// scissors -> wins over: lizard, paper
// lizard -> wins over: paper, spock
// spock -> wins over: rock, scissors

const gameWinningRules = {
  r: { ss: 'win', l: 'win'},
  p: { r: 'win', s: 'win'},
  ss: { p: 'win', l: 'win'},
  l: { p: 'win', s: 'win'},
  s: { r: 'win', ss: 'win'}
};

let playerScores = 0;
let computerScores = 0;
let userInput;
let letsPlay;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function chooseRandomRPS() {
  let chomputerIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[chomputerIndex];
}

function checkUserInput() {
  while (!VALID_CHOICES.includes(userInput)) {
    prompt('That is not a valid choice, choose again!');
    userInput = readline.question();
  }
}

function checkWinner(user) {
  let computersChoice = chooseRandomRPS();
  console.log('Computer chose: ', computersChoice);
  if ( user === computersChoice ) {
    prompt(`It's a TIE! You: ${playerScores} - Computer: ${computerScores} 
    Type a choice:`);
  } else if (gameWinningRules[user][computersChoice]) {
    playerScores += 1;
    if (playerScores === 3) return;
    prompt(`YOU WON this round! You: ${playerScores} - Computer: ${computerScores} 
    Type a choice:`);
  } else {
    computerScores += 1;
    if (computerScores === 3) return;
    prompt(`COMPUTER WON this round! You: ${playerScores} - Computer: ${computerScores} 
    Type a choice:`);
  }
}

function playGame() {
  while (letsPlay[0] !== 'y' && letsPlay[0] !== 'n') {
    prompt('That is not a valid choice, choose yes or no!');
    letsPlay = readline.question().toLowerCase();
  }

  if (letsPlay[0] === 'y' && (playerScores === 3 || computerScores === 3)) {
    playerScores = 0;
    computerScores = 0;
  }
}

function finalScore() {
  if (playerScores === 3) {
    prompt(`Congrats! You won! You: ${playerScores} - Computer: ${computerScores}`);
  }

  if (computerScores === 3) {
    prompt(`Computer won this time! You: ${playerScores} - Computer: ${computerScores}`);
  }

  prompt('What to play again? y or n');
  letsPlay = readline.question().toLowerCase();
}


prompt('Do you want to play Rock Paper Scissors Lizard Spock? yes or no?');
letsPlay = readline.question().toLowerCase();

playGame();

while (letsPlay[0] === 'y') {
  prompt(`Let's go!
  The first player to reach 3 wins will be the overall winner!
  Start by looking at the choices below and 
  typing in one shorthand (Choice --> Shorthand):
  
    rock --> r
    paper --> p
    scissor --> ss
    lizard --> l
    spock --> s
  
  Your choice: `);

  while (playerScores < 3 && computerScores < 3) {
    userInput = readline.question();

    checkUserInput();
    checkWinner(userInput);
  }

  finalScore();

  playGame();
}
