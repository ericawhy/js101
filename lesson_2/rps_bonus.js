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
let roundOutcome;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function welcomeMsg() {
  prompt('Do you want to play Rock Paper Scissors Lizard Spock? yes or no?');
  letsPlay = readline.question().toLowerCase();
}

function checkLetsPlayInput() {
  while (letsPlay !== 'yes' && letsPlay !== 'no') {
    prompt('That is not a valid choice, choose yes or no!');
    letsPlay = readline.question().toLowerCase();
  }
}

function showInstructions() {
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

function getWinner(user) {
  console.clear();

  let computersChoice = chooseRandomRPS();
  console.log('Computer chose: ', computersChoice);

  if ( user === computersChoice ) {
    roundOutcome = 'tie';
  } else if (gameWinningRules[user][computersChoice]) {
    roundOutcome = 'win';
  } else {
    roundOutcome = 'lose';
  }
}

function updateScore() {
  if (roundOutcome === 'win') playerScores += 1;
  if (roundOutcome === 'lose') computerScores += 1;
}

function showRoundWinner() {
  switch (roundOutcome) {
    case 'tie':
      prompt(`It's a TIE! You: ${playerScores} - Computer: ${computerScores} Type a choice:`);
      break;
    case 'win':
      prompt(`YOU WON this round! You: ${playerScores} - Computer: ${computerScores} Type a choice:`);
      break;
    case 'lose':
      prompt(`COMPUTER WON this round! You: ${playerScores} - Computer: ${computerScores} Type a choice:`);
      break;
    default:
  }
}

function showWinner() {
  console.clear();

  if (playerScores === 3) {
    prompt(`Congrats! You won! You: ${playerScores} - Computer: ${computerScores}`);
  }

  if (computerScores === 3) {
    prompt(`Computer won this time! You: ${playerScores} - Computer: ${computerScores}`);
  }
}

function resetScores() {
  playerScores = 0;
  computerScores = 0;
}

function playGameAgain() {
  prompt('What to play again? yes or no?');
  letsPlay = readline.question().toLowerCase();
}

welcomeMsg();

checkLetsPlayInput();

while (letsPlay === 'yes') {
  console.clear();

  showInstructions();

  while (playerScores < 3 && computerScores < 3) {
    userInput = readline.question();

    checkUserInput();

    getWinner(userInput);

    updateScore();

    showRoundWinner();

    if (playerScores === 3 || computerScores === 3) break;
  }

  showWinner();

  playGameAgain();

  checkLetsPlayInput();

  resetScores();
}

console.clear();