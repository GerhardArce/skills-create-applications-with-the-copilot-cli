// Calculator: supports the following operations:
// - addition (add)
// - subtraction (sub)
// - multiplication (mul)
// - division (div)

// Each function accepts two numbers and returns the numeric result.
// Division by zero throws an Error with a clear message.

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

module.exports = {
  add,
  sub,
  mul,
  div,
};
