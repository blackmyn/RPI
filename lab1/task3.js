const readline = require('readline');
const calculateFunctionB = require('./lib.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите значение x: ', (x) => {
    rl.question('Введите значение y: ', (y) => {
        rl.question('Введите значение z: ', (z) => {
            const xValue = parseFloat(x);
            const yValue = parseFloat(y);
            const zValue = parseFloat(z);
            const result = calculateFunctionB(xValue, yValue, zValue);
            console.log(`Результат вычисления функции для x=${x}, y=${y}, z=${z}: ${result}`);
            rl.close();
        });
    });
});