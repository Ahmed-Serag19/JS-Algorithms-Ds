<<<<<<< HEAD
const validatePassword = require('./password-validator');

test('Password Validation', () => {
  expect(validatePassword('Abc12345')).toBe(true);
  expect(validatePassword('password123')).toBe(false);
  expect(validatePassword('Pass')).toBe(false);
  expect(validatePassword('HelloWorld')).toBe(false);
});
=======
const validatePassword = require('./password-validator');

test('Password Validation', () => {
  expect(validatePassword('Abc12345')).toBe(true);
  expect(validatePassword('password123')).toBe(false);
  expect(validatePassword('Pass')).toBe(false);
  expect(validatePassword('HelloWorld')).toBe(false);
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
