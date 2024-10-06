function arrayIntersection(arr1, arr2) {
  const commonArr = [];
  for (let i = 0; i <= arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !commonArr.includes(arr1[i])) {
      commonArr.push(arr1[i]);
    }
  }
  return commonArr;
}
console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
module.exports = arrayIntersection;
