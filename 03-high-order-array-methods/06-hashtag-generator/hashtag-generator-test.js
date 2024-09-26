<<<<<<< HEAD
const generateHashtag = require('./hashtag-generator');

test('Generating Hashtags', () => {
  expect(generateHashtag(' Hello there thanks for trying my Kata')).toBe(
    '#HelloThereThanksForTryingMyKata'
  );
  expect(generateHashtag('    Hello     World   ')).toBe('#HelloWorld');
  expect(generateHashtag('')).toBe(false);
  expect(
    generateHashtag(
      'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140'
    )
  ).toBe(false);
});
=======
const generateHashtag = require('./hashtag-generator');

test('Generating Hashtags', () => {
  expect(generateHashtag(' Hello there thanks for trying my Kata')).toBe(
    '#HelloThereThanksForTryingMyKata'
  );
  expect(generateHashtag('    Hello     World   ')).toBe('#HelloWorld');
  expect(generateHashtag('')).toBe(false);
  expect(
    generateHashtag(
      'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140'
    )
  ).toBe(false);
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
