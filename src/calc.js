// Calculator core functions
// Supported operations: +, -, *, /

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

function performOperation(a, operator, b) {
  switch (operator) {
    case '+':
      return { result: add(a, b), operation: 'Addition' };
    case '-':
      return { result: subtract(a, b), operation: 'Subtraction' };
    case '*':
      return { result: multiply(a, b), operation: 'Multiplication' };
    case '/':
      return { result: divide(a, b), operation: 'Division' };
    case '%':
      return { result: modulo(a, b), operation: 'Modulo' };
    case '^':
      return { result: power(a, b), operation: 'Power' };
    default:
      throw new Error(`Unknown operator '${operator}'`);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  performOperation,
};
