const readlineSync = require('readline-sync');

// 3 user values
// loan amount
// annual percentage rate (have the user input decimal or whole num?)
// loan duration (years or months?)
// type check for the user values
// calculate monthly interest rate
// loan duration in months

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

function calculateMonthlyPayment(loan, interest, duration) {
  if (Number(interest) >= 1) {
    interest = (Number(interest) * .01) / 12;
  }
  let monthlyPayment = Number(loan) *
  (Number(interest) /
  (1 - Math.pow((1 + Number(interest)), (-Number(duration)))));

  prompt(`Your monthly payment: $${monthlyPayment.toFixed(2)}`);
}

while (true) {
  prompt('Enter loan amount: ');
  let loanAmt = readlineSync.question();

  while (invalidNumber(loanAmt)) {
    prompt('Enter valid number for loan amount:');
    loanAmt = readlineSync.question();
  }

  prompt('Enter monthly interest: ');
  let monthlyInterest = readlineSync.question();

  while (invalidNumber(monthlyInterest)) {
    prompt('Enter valid number for monthly interest:');
    monthlyInterest = readlineSync.question();
  }

  prompt('Enter loan duration in months: ');
  let loanDurationMonths = readlineSync.question();

  while (invalidNumber(loanDurationMonths)) {
    prompt('Enter valid number for monthly load duration');
    loanDurationMonths = readlineSync.question();
  }

  calculateMonthlyPayment(loanAmt, monthlyInterest, loanDurationMonths);

  prompt('Another calculation?');
  let answer = readlineSync.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readlineSync.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}