<<<<<<< HEAD
const findPairSum = require('./find-pair-sum');

describe('findPairSum', () => {
  it('should find a pair with the given target sum', () => {
    const nums = [2, 6, 3, 8, 10, 5];
    const targetSum = 12;
    const pair = findPairSum(nums, targetSum);
    expect(pair).toEqual([2, 10]);
  });

  it('should return null if no such pair exists', () => {
    const nums = [1, 2, 3, 4, 5];
    const targetSum = 10;
    const pair = findPairSum(nums, targetSum);
    expect(pair).toBeNull();
  });
});
=======
const findPairSum = require('./find-pair-sum');

describe('findPairSum', () => {
  it('should find a pair with the given target sum', () => {
    const nums = [2, 6, 3, 8, 10, 5];
    const targetSum = 12;
    const pair = findPairSum(nums, targetSum);
    expect(pair).toEqual([2, 10]);
  });

  it('should return null if no such pair exists', () => {
    const nums = [1, 2, 3, 4, 5];
    const targetSum = 10;
    const pair = findPairSum(nums, targetSum);
    expect(pair).toBeNull();
  });
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
