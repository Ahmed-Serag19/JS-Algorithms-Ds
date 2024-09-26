function findMaxNumber(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  return max;
}
const array = [1, 5, 3, 9, 2];
console.log(findMaxNumber(array));
module.exports = findMaxNumber;
