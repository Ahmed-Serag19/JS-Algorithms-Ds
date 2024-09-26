<<<<<<< HEAD
const Stack = require('./stack');
const balancedParenthesis = require('./balanced-parenthesis');

describe('balancedParenthesis', () => {
  test('should return true for balanced parentheses', () => {
    expect(balancedParenthesis('()')).toBe(true);
    expect(balancedParenthesis('(())')).toBe(true);
    expect(balancedParenthesis('(()())')).toBe(true);
    expect(balancedParenthesis('((()))')).toBe(true);
    expect(balancedParenthesis('()()()')).toBe(true);
    expect(balancedParenthesis('()((()))()')).toBe(true);
    expect(balancedParenthesis('((()()(())))')).toBe(true);
  });

  test('should return false for unbalanced parentheses', () => {
    expect(balancedParenthesis(')(')).toBe(false);
    expect(balancedParenthesis('((')).toBe(false);
    expect(balancedParenthesis('))')).toBe(false);
    expect(balancedParenthesis('())')).toBe(false);
    expect(balancedParenthesis('(()(()')).toBe(false);
    expect(balancedParenthesis('(()())(')).toBe(false);
    expect(balancedParenthesis('((()()(()))')).toBe(false);
  });
});
=======
const Stack = require('./stack');
const balancedParenthesis = require('./balanced-parenthesis');

describe('balancedParenthesis', () => {
  test('should return true for balanced parentheses', () => {
    expect(balancedParenthesis('()')).toBe(true);
    expect(balancedParenthesis('(())')).toBe(true);
    expect(balancedParenthesis('(()())')).toBe(true);
    expect(balancedParenthesis('((()))')).toBe(true);
    expect(balancedParenthesis('()()()')).toBe(true);
    expect(balancedParenthesis('()((()))()')).toBe(true);
    expect(balancedParenthesis('((()()(())))')).toBe(true);
  });

  test('should return false for unbalanced parentheses', () => {
    expect(balancedParenthesis(')(')).toBe(false);
    expect(balancedParenthesis('((')).toBe(false);
    expect(balancedParenthesis('))')).toBe(false);
    expect(balancedParenthesis('())')).toBe(false);
    expect(balancedParenthesis('(()(()')).toBe(false);
    expect(balancedParenthesis('(()())(')).toBe(false);
    expect(balancedParenthesis('((()()(()))')).toBe(false);
  });
});
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
