<<<<<<< HEAD
function factorial(num) {
  // Base case: 0! and 1! are both 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // Recursive case: n! = n * (n - 1)!
  return num * factorial(num - 1);
}

// Shorter version
const factorial = (num) =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);

module.exports = factorial;
=======
function factorial(num) {
  // Base case: 0! and 1! are both 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // Recursive case: n! = n * (n - 1)!
  return num * factorial(num - 1);
}

// Shorter version
const factorial = (num) =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);

module.exports = factorial;
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
