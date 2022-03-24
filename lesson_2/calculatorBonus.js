const readlineSync = require("readline-sync");
const messages = require("./calculator_messages.json");

const LANGUAGE = "es";
// LS Refactored
function prompt(msg, lang = "en") {
  console.log(`=> ${messages[lang][msg]}`);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

let anotherCalc = 'yes';
// could fo while (true)
while (anotherCalc === 'yes') {
  prompt('welcome', LANGUAGE);

  prompt('firstQ');
  let number1 = readlineSync.question();

  while (invalidNumber(number1)) {
    prompt('invalidNum');
    number1 = readlineSync.question();
  }

  prompt('secondQ');
  let number2 = readlineSync.question();

  while (invalidNumber(number2)) {
    prompt('invalidNum');
    number2 = readlineSync.question();
  }

  prompt('operatorQ');
  let operation = readlineSync.question();
  // can also use includes below !['1', '2', '3', '4'].includes(operation)
  while (['1', '2', '3', '4'].indexOf(operation) === -1) {
    prompt('invalidOper');
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

  console.log(`${messages.en.result} ${output}`);

  prompt('anotherCalc');
  anotherCalc = readlineSync.question();

  // if (anotherCalc[0].toLowerCase() !== 'y') break;
}


