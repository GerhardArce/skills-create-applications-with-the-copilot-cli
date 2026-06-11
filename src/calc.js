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
    default:
      throw new Error(`Unknown operator '${operator}'`);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  performOperation,
};
