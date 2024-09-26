<<<<<<< HEAD
function arraySum(arr) {
  if (arr.length === 0) {
    return 0; // Base case: Empty array, return 0
  } else {
    return arr[0] + arraySum(arr.slice(1)); // Recursive case: Sum the first element and the sum of the rest of the array
  }
}
=======
function arraySum(arr) {
  if (arr.length === 0) {
    return 0; // Base case: Empty array, return 0
  } else {
    return arr[0] + arraySum(arr.slice(1)); // Recursive case: Sum the first element and the sum of the rest of the array
  }
}
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
