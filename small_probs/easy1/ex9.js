// divisible by 4 leap year
// divisible by 4 and 100 not leap year
// divisible by 400 leap year

//if before 1752 then all divisible by 4

const isLeapYear = (year) => {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(1700))