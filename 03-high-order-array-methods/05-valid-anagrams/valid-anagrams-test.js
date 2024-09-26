<<<<<<< HEAD
const validAnagrams = require('./valid-anagrams');

test('Checking for Valid Anagrams', () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('hello', 'world')).toBe(false);
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true);
  expect(validAnagrams('apple', 'banana')).toBe(false);
  expect(validAnagrams('aaa', 'aaab')).toBe(false);
});
=======
const validAnagrams = require('./valid-anagrams');

test('Checking for Valid Anagrams', () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('hello', 'world')).toBe(false);
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true);
  expect(validAnagrams('apple', 'banana')).toBe(false);
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
