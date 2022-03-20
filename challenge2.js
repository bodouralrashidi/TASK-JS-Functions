/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2) {
    return true;
  } else {
    return false;
  }
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let counter = 0;
  for (let index = 0; index < n; index++) {
    if (index % 2) {
      counter++;
    }
  }
  return counter;
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2) {
    return n * n;
  } else {
    return n * 2;
  }
}
console.log(` The  squareORdouble  if 9 -> ${squareOrDouble(8)}`);
console.log(` The  function hello ->  `);
greet("bodour");
console.log(` The  function isOdd 7 ->   ${isOdd(78)}`);
console.log(oddsSmallerThan(8));
module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
