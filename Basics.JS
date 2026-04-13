// 1) Even or Odd
const check = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(check(2));

// 2) Result Evaluvator - Pass or Fail
function evaluateResult(marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
    return null;
  }
  return marks >= 50 ? "Pass" : "Fail";
}
console.log(evaluateResult(75));

// 3) Maximum Finder - Largest of Three Numbers
const findMax = (a, b, c) => {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
};
console.log(findMax(1, 2, 3));

// 4) Accumulator Sum From 1 to N
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumToN(5));

// 5) Multiplication Table Generator
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
printTable(5);

// 6) Digit Counter - Number Length Finder
function countDigits(num) {
  if (num === 0) return 1;

  let count = 0;
  num = Math.abs(num);

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}
console.log(countDigits(12345)); 

// 7) Reverse Number
function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
}
console.log(reverseNumber(12345));

// 8) Factorial Engine
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(5));

// 9) Prime Validator
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(5));

// 10) Pattern Builder - Star Triangle
function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printPattern(5);