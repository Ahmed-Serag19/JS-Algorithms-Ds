function titleCase(sentence) {
  let lowerCasing = sentence.toLowerCase().split(" ");

  for (let i = 0; i < lowerCasing.length; i++) {
    lowerCasing[i] = lowerCasing[i][0].toUpperCase() + lowerCasing[i].slice(1);
  }
  return lowerCasing.join(" ");
}

console.log(titleCase("Hello World iam a kanGaRoo"));
module.exports = titleCase;
