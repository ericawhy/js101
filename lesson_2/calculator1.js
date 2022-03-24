/* eslint-disable max-len */
// ask for number 1
// ask for number 2
// ask for operation to perform (add, subtract, multiply or divide)
// perform calculation
// display the result of the operation

const readlineSync = require("readline-sync");

// let num1 = readlineSync.questionInt("Input a number: ");
// let num2 = readlineSync.questionInt("Input a second number: ");
// let operation = readlineSync.question("Which operation do you want to preform? Type the following: + , - , *, or /: ");

// switch (operation) {
//   case '+': console.log(num1 + num2); break;
//   case '-': console.log(num1 - num2); break;
//   case '*': console.log(num1 * num2); break;
//   case '/': console.log(num1 / num2); break;
//   default: console.log('Choose an operation listed')
// }

// LS WAY BELOW
// console.log('Welcome to Calculator!');
// console.log('What is the first number?');
// let number1 = readlineSync.question();

// console.log('What is the second number?');
// let number2 = readlineSync.question();

// console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
// let operation = readlineSync.question();

// let output;
// if (operation === '1') {
//   output = Number(number1) + Number(number2);
// } else if (operation === '2') {
//   output = Number(number1) - Number(number2);
// } else if (operation === '3') {
//   output = Number(number1) * Number(number2);
// } else if (operation === '4') {
//   output = Number(number1) / Number(number2);
// }
// console.log(`The result is: ${output}`);

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