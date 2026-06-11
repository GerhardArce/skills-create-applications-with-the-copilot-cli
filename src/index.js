#!/usr/bin/env node

/**
 * CLI Calculator (wrapper)
 *
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 *
 * This file is a thin CLI wrapper that delegates calculations to src/calc.js
 */

const calc = require('./calc');

// Get command line arguments (skip node and script path)
const args = process.argv.slice(2);

// Validate input
if (args.length !== 3) {
  console.error('Usage: calc <number> <operator> <number>');
  console.error('Operators: +, -, *, /');
  console.error('Example: calc 10 + 5');
  process.exit(1);
}

// Parse arguments
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

// Validate numbers
if (isNaN(num1) || isNaN(num2)) {
  console.error('Error: Both arguments must be valid numbers');
  process.exit(1);
}

try {
  const { result, operation } = calc.performOperation(num1, operator, num2);
  console.log(`${operation}: ${num1} ${operator} ${num2} = ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
