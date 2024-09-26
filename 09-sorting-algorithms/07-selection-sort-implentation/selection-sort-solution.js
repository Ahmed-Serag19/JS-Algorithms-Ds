<<<<<<< HEAD
function selectionSort(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Set the minIndex to the current index
    let minIndex = i;

    // Loop through the array starting at the next index
    for (let j = i + 1; j < arr.length; j++) {
      // If the current element is less than the element at the minIndex, set the minIndex to the current index
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the minIndex is not the current index, swap the elements
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // Return the sorted array
  return arr;
}

module.exports = selectionSort;
=======
function selectionSort(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Set the minIndex to the current index
    let minIndex = i;

    // Loop through the array starting at the next index
    for (let j = i + 1; j < arr.length; j++) {
      // If the current element is less than the element at the minIndex, set the minIndex to the current index
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the minIndex is not the current index, swap the elements
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // Return the sorted array
  return arr;
}

module.exports = selectionSort;
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
