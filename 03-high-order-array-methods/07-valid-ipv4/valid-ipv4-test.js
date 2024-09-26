<<<<<<< HEAD
const isValidIPv4 = require('./valid-ipv4');

test('Checking Valid IPv4 Addresses', () => {
  expect(isValidIPv4('1.2.3.4')).toBe(true);
  expect(isValidIPv4('123.45.67.89')).toBe(true);
  expect(isValidIPv4('1.2.3')).toBe(false);
  expect(isValidIPv4('1.2.3.4.5')).toBe(false);
  expect(isValidIPv4('123.456.78.90')).toBe(false);
  expect(isValidIPv4('123.045.067.089')).toBe(false);
});
=======
const isValidIPv4 = require('./valid-ipv4');

test('Checking Valid IPv4 Addresses', () => {
  expect(isValidIPv4('1.2.3.4')).toBe(true);
  expect(isValidIPv4('123.45.67.89')).toBe(true);
  expect(isValidIPv4('1.2.3')).toBe(false);
  expect(isValidIPv4('1.2.3.4.5')).toBe(false);
  expect(isValidIPv4('123.456.78.90')).toBe(false);
  expect(isValidIPv4('123.045.067.089')).toBe(false);
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
