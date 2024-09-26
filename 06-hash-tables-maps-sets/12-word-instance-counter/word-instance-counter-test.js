<<<<<<< HEAD
const wordInstanceCounter = require('./word-instance-counter')

test('Counting instances of a word in a string', () => {
  expect(
    wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
  ).toBe(2);
  expect(
    wordInstanceCounter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'ipsum'
    )
  ).toBe(1);
  expect(wordInstanceCounter('Hello, world!', 'hello')).toBe(1);
  expect(wordInstanceCounter('Hello, Hello, Hello!', 'hello')).toBe(3);
});
=======
const wordInstanceCounter = require('./word-instance-counter')

test('Counting instances of a word in a string', () => {
  expect(
    wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
  ).toBe(2);
  expect(
    wordInstanceCounter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'ipsum'
    )
  ).toBe(1);
  expect(wordInstanceCounter('Hello, world!', 'hello')).toBe(1);
  expect(wordInstanceCounter('Hello, Hello, Hello!', 'hello')).toBe(3);
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
