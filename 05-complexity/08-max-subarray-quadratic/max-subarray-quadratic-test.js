const maxSubarraySum = require('./max-subarray-quadratic');

test('Finding maximum subarray sum using O(n^2) solution', () => {
  const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
  const k1 = 3;
  expect(maxSubarraySum(arr1, k1)).toBe(24);

  const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
  const k2 = 4;
<<<<<<< HEAD
  expect(maxSubarraySum(arr2, k2)).toBe(-11);
=======
  expect(maxSubarraySum(arr2, k2)).toBe(-9);
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
});
