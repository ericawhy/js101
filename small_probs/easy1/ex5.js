let readlineSync = require('readline-sync');

let bill = readlineSync.questionInt('What is the bill? ');
let percent = readlineSync.questionInt('What is the tip percentage? ');
let tip = bill * (percent / 100);
console.log(`The tip is $${tip.toFixed(2)}`);
let total = bill + tip;
console.log(`The total is $${total.toFixed(2)}`);