const { add, subtract, multiply, divide, modulo, power, squareRoot, performOperation } = require('../calc');

describe('Calculator core functions', () => {
  test('Addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
    const res = performOperation(2, '+', 3);
    expect(res.result).toBe(5);
    expect(res.operation).toBe('Addition');
  });

  test('Subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
    const res = performOperation(10, '-', 4);
    expect(res.result).toBe(6);
    expect(res.operation).toBe('Subtraction');
  });

  test('Multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
    const res = performOperation(45, '*', 2);
    expect(res.result).toBe(90);
    expect(res.operation).toBe('Multiplication');
  });

  test('Division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
    const res = performOperation(20, '/', 5);
    expect(res.result).toBe(4);
    expect(res.operation).toBe('Division');
  });

  test('Division by zero should throw', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
    expect(() => performOperation(1, '/', 0)).toThrow('Division by zero');
  });

  test('Modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
    const res = performOperation(5, '%', 2);
    expect(res.result).toBe(1);
    expect(res.operation).toBe('Modulo');
  });

  test('Modulo by zero should throw', () => {
    expect(() => modulo(1, 0)).toThrow('Modulo by zero');
    expect(() => performOperation(1, '%', 0)).toThrow('Modulo by zero');
  });

  test('Power: 2 ^ 3 = 8 and fractional exponents', () => {
    expect(power(2, 3)).toBe(8);
    const res = performOperation(2, '^', 3);
    expect(res.result).toBe(8);
    expect(res.operation).toBe('Power');

    // fractional exponent
    expect(power(9, 0.5)).toBeCloseTo(3);
  });

  test('Square root: sqrt(16) = 4 and negative input throws', () => {
    expect(squareRoot(16)).toBe(4);
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });

  test('Unknown operator should throw', () => {
    expect(() => performOperation(1, '@', 2)).toThrow("Unknown operator '@'");
  });

  test('Supports decimal numbers', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(divide(5.5, 2)).toBeCloseTo(2.75);
  });
});
