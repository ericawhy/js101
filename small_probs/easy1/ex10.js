// max number
// multiple by 3 or 5
// make sure multiple accounts for 1
// new sum

function checkMultiple (num) {
  return !(num % 3) || !(num % 5)
}

function multisum (num) {
  let sum = 0
  for (let i = 1; i <=num; i++) {
    if (checkMultiple(i)) {
      sum += i
    }
  }
  return sum
}

console.log(multisum(1000))