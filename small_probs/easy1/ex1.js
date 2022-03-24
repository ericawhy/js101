const isOdd = (num) => !!(num % 2)
// 1 and -1 is true, 0 is false, so !! converts number to a boolean
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true