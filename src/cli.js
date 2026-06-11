#!/usr/bin/env node

// Simple CLI wrapper for the calculator functions.
// Usage examples:
//   node src/cli.js add 2 3    # -> 5
//   node src/cli.js sub 5 2    # -> 3
//   node src/cli.js mul 4 6    # -> 24
//   node src/cli.js div 8 2    # -> 4

const path = require('path');
const { add, sub, mul, div } = require('./calculator');

function printUsageAndExit() {
  console.error('Usage: node src/cli.js <op> <a> <b>\nops: add, sub, mul, div');
  process.exit(1);
}

const [, , op, aStr, bStr] = process.argv;
if (!op || !aStr || !bStr) {
  printUsageAndExit();
}

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Both operands must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (op) {
    case 'add':
      result = add(a, b);
      break;
    case 'sub':
      result = sub(a, b);
      break;
    case 'mul':
      result = mul(a, b);
      break;
    case 'div':
      result = div(a, b);
      break;
    default:
      console.error(`Unknown operation: ${op}`);
      printUsageAndExit();
  }
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
