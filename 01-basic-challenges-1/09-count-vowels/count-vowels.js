function countVowels(sentence) {
  let vowelsCount = 0;
  lowerCasedSentence = sentence.toLowerCase().split("");
  for (let i = 0; i < lowerCasedSentence.length; i++) {
    if (
      lowerCasedSentence[i] == "o" ||
      lowerCasedSentence[i] == "e" ||
      lowerCasedSentence[i] == "i" ||
      lowerCasedSentence[i] == "u" ||
      lowerCasedSentence[i] == "a"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(countVowels("Hello World"));
module.exports = countVowels;
