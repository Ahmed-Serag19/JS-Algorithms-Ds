<<<<<<< HEAD
const HashTable = require('./HashTable');

function anagramGrouping(words) {
  // Create a new HashTable instance
  const anagramGroups = new HashTable();

  // Loop through each word in the words array
  for (const word of words) {
    // Sort the word's characters alphabetically
    const sortedChars = word.split('').sort().join('');
    // If the sorted characters are already in the HashTable, push the word to the array
    if (anagramGroups.get(sortedChars)) {
      anagramGroups.get(sortedChars).push(word);
    } else {
      // Otherwise, set the sorted characters as the key and the word as the value
      anagramGroups.set(sortedChars, [word]);
    }
  }

  // Return the values of the HashTable
  return anagramGroups.getValues();
}

module.exports = anagramGrouping;
=======
const HashTable = require('./HashTable');

function anagramGrouping(words) {
  // Create a new HashTable instance
  const anagramGroups = new HashTable();

  // Loop through each word in the words array
  for (const word of words) {
    // Sort the word's characters alphabetically
    const sortedChars = word.split('').sort().join('');
    // If the sorted characters are already in the HashTable, push the word to the array
    if (anagramGroups.get(sortedChars)) {
      anagramGroups.get(sortedChars).push(word);
    } else {
      // Otherwise, set the sorted characters as the key and the word as the value
      anagramGroups.set(sortedChars, [word]);
    }
  }

  // Return the values of the HashTable
  return anagramGroups.getValues();
}

module.exports = anagramGrouping;
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
