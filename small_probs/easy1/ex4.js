let readlineSync = require('readline-sync')

// let roomLength = readlineSync.questionInt('Enter the length of the room in meters:\n')
// let roomWidth = readlineSync.questionInt('Enter the width of the room in meters:\n')
// let sqMeters = (roomLength * roomWidth).toFixed(2)
// let sqFeet = (sqMeters * 10.7639).toFixed(2)
// console.log(`The area of the room is ${sqMeters} square meters (${sqFeet} square feet).`)

const SQMETERS_TO_SQFEET = 10.7639
console.log(`Enter the length of the room in meters:`)
let roomLength = readlineSync.prompt()
//saved prompt is a string - convert to number
roomLength = parseInt(roomLength)
console.log(`Enter the width of the room in meters:`)
let roomWidth = readlineSync.prompt()
roomWidth = parseInt(roomWidth)
let sqMeters = (roomLength * roomWidth).toFixed(2)
let sqFeet = (sqMeters * SQMETERS_TO_SQFEET).toFixed(2)
console.log(`The area of the room is ${sqMeters} square meters (${sqFeet} square feet).`)