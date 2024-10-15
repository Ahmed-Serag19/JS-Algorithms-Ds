function areAllCharactersUnique(word) {
  const charSet = new Set();
  for (let i = 0; i < word.length; i++) {
    console.log(charSet);
    if (charSet.has(word[i])) {
      return false;
    }
    charSet.add(word[i]);
  }
  return true;
}

module.exports = areAllCharactersUnique;
