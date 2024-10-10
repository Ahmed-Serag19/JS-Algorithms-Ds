function findMissingNumber(arr) {
  const sortedArr = arr.sort();
  let temp;
  let missingNum;
  for (let i = 0; i <= sortedArr.length + 1; i++) {
    console.log(sortedArr);
    console.log(temp, missingNum);

    temp = sortedArr[i] + 1;
    if (sortedArr[i] !== temp) {
      missingNum = sortedArr[i];
    }
  }
  return missingNum;
}

findMissingNumber([1, 5, 3, 4, 2, 7]);
module.exports = findMissingNumber;
