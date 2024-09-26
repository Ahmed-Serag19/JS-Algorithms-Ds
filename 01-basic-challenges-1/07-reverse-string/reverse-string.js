// function reverseString(string) {
//   return string.split("").reverse().join("");
// }

function reverseString(sentence) {
  let reversed = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    console.log(i);
    reversed += sentence[i];
  }
  return reversed;
}
console.log(reverseString("Hello World"));
module.exports = reverseString;
