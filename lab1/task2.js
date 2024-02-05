const calculateFunction = require('./lib.js');

const x = parseFloat(process.argv[2]);
const y = parseFloat(process.argv[3]);
const z = parseFloat(process.argv[4]);

const result = calculateFunction(x, y, z);

console.log(`Результат вычисления функции для x=${x}, y=${y}, z=${z}: ${result}`);
