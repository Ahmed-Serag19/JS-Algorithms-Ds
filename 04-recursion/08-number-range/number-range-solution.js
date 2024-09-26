<<<<<<< HEAD
// Define the function named rangeOfNumbers that takes two parameters: startNum and endNum
function rangeOfNumbers(startNum, endNum) {
  // Check if the startNum is equal to endNum (base case)
  if (startNum === endNum) {
    // If they are equal, return an array containing just the startNum
    return [startNum];
  } 
  
  // If they are not equal, create a variable named 'numbers'
  // Call the rangeOfNumbers function recursively on a smaller range
  // This creates an array of numbers from startNum to endNum - 1
  const numbers = rangeOfNumbers(startNum, endNum - 1);

  // Push the current value of endNum to the 'numbers' array
  numbers.push(endNum);

  // Return the 'numbers' array containing all the numbers from startNum to endNum
  return numbers;
}
=======
// Define the function named rangeOfNumbers that takes two parameters: startNum and endNum
function rangeOfNumbers(startNum, endNum) {
  // Check if the startNum is equal to endNum (base case)
  if (startNum === endNum) {
    // If they are equal, return an array containing just the startNum
    return [startNum];
  } 
  
  // If they are not equal, create a variable named 'numbers'
  // Call the rangeOfNumbers function recursively on a smaller range
  // This creates an array of numbers from startNum to endNum - 1
  const numbers = rangeOfNumbers(startNum, endNum - 1);

  // Push the current value of endNum to the 'numbers' array
  numbers.push(endNum);

  // Return the 'numbers' array containing all the numbers from startNum to endNum
  return numbers;
}
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
