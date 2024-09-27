function removeDuplicates(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!filteredArr.includes(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

module.exports = removeDuplicates;
