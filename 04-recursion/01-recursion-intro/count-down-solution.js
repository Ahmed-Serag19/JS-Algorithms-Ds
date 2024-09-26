<<<<<<< HEAD
function countDown(num) {
  // Base case - if num is less than or equal to 0, log 'All done!' and return
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  // Recursive case - log num, decrement num, and call countDown again
  console.log(num);
  num--;
  countDown(num);
}

module.exports = countDown;
=======
function countDown(num) {
  // Base case - if num is less than or equal to 0, log 'All done!' and return
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  // Recursive case - log num, decrement num, and call countDown again
  console.log(num);
  num--;
  countDown(num);
}

module.exports = countDown;
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
