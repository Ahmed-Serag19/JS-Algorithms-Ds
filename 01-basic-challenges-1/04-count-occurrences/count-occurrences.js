// function countOccurrences(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

const countOccurrences = (word, letter) => word.split(letter).length - 1;
console.log(countOccurrences("Hello World", "W"));
module.exports = countOccurrences;
