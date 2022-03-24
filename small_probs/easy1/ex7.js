const shortLongShort = (stg1, stg2) => {
  if (stg1.length > stg2.length) {
    return stg2 + stg1 + stg2
  } else {
    return stg1 + stg2 + stg1
  }
}

console.log(shortLongShort('abc', 'defgh'))
console.log(shortLongShort('abcde', 'fgh'))
console.log(shortLongShort('', 'xyz'))