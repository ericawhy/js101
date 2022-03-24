const readlineSync = require("readline-sync");
// LS Refactored
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to Calculator!');

prompt('What is the first number?');
let number1 = readlineSync.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readlineSync.question();
}

prompt('What is the second number?');
let number2 = readlineSync.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readlineSync.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readlineSync.question();
// can also use includes below !['1', '2', '3', '4'].includes(operation)
while (['1', '2', '3', '4'].indexOf(operation) === -1) {
  prompt("'Must choose 1, 2, 3 or 4'");
  operation = readlineSync.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);