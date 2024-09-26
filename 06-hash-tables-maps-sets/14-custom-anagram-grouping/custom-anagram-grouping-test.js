<<<<<<< HEAD
const anagramGrouping = require('./custom-anagram-grouping');

describe('Anagram Grouping', () => {
  test('Grouping anagrams', () => {
    const words = [
      'listen',
      'silent',
      'hello',
      'world',
      'act',
      'cat',
      'dog',
      'god',
    ];

    const result = anagramGrouping(words);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(['listen', 'silent']),
        expect.arrayContaining(['act', 'cat']),
        expect.arrayContaining(['dog', 'god']),
        expect.arrayContaining(['hello']),
        expect.arrayContaining(['world']),
      ])
    );
  });
});
=======
const anagramGrouping = require('./custom-anagram-grouping');

describe('Anagram Grouping', () => {
  test('Grouping anagrams', () => {
    const words = [
      'listen',
      'silent',
      'hello',
      'world',
      'act',
      'cat',
      'dog',
      'god',
    ];

    const result = anagramGrouping(words);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(['listen', 'silent']),
        expect.arrayContaining(['act', 'cat']),
        expect.arrayContaining(['dog', 'god']),
        expect.arrayContaining(['hello']),
        expect.arrayContaining(['world']),
      ])
    );
  });
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
