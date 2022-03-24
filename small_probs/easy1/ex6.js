// ask for interger greater than 0
// ask for s or p
// if s then add intergers between 1 and input
// if p then multiple integers between 1 and input

let readlineSync = require('readline-sync');

//questionInt will output 'Input alid number, please' if input isn't a number
let integer = readlineSync.questionInt(`Please enter an integer greater than 0: `)
let type = readlineSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `)

let count = 1
let sum = 0
let product = 1

while (count <= integer && integer > 0) {
  type === 's' ? sum += count : product *= count
  count += 1
}

if (integer === 0) {
  console.log('Integer has to be greater than 1')
} else {
  if (type === 's') {
    console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`)
  } else if (type === 'p') {
    console.log(`The product of the integers between 1 and ${integer} is ${product}.`)
  } else {
    console.log(`Not s or p`)
  }
}
