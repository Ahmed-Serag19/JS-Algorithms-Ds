function calculator(num1, num2, operation) {
  let value;

  if (operation === "+") {
    value = num1 + num2;
  } else if (operation === "-") {
    value = num1 - num2;
  } else if (operation === "*") {
    value = num1 * num2;
  } else if (operation === "/") {
    value = num1 / num2;
  } else {
    return "Invalid operation";
  }
  return value;
}
console.log(calculator(5, 3, "-"));
module.exports = calculator;
