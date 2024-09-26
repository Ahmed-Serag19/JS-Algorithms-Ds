<<<<<<< HEAD
// Solution 1 - Using a for loop
function titleCase(str) {
  // Split the string into an array of words
  const words = str.toLowerCase().split(' ');

  // Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the array of words into a string and return it
  return words.join(' ');
}

// Solution 2 - Using a regular expression
function titleCase(str) {
  // Replace the first letter of each word with its uppercase equivalent
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
=======
// Solution 1 - Using a for loop
function titleCase(str) {
  // Split the string into an array of words
  const words = str.toLowerCase().split(' ');

  // Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the array of words into a string and return it
  return words.join(' ');
}

// Solution 2 - Using a regular expression
function titleCase(str) {
  // Replace the first letter of each word with its uppercase equivalent
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
