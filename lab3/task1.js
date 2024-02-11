const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const TIMER_1_DELAY = 1000;
const TIMER_2_DELAY = 3000;
const TIMER_3_DELAY = 5000;
const FILE_PATH = path.join(__dirname, 'sample.txt');

const startTime = performance.now();

function logElapsedTime(label) { 
    const elapsedTime = (performance.now() - startTime).toFixed(2);
    console.log(`${label} - Elapsed Time: ${elapsedTime}ms`); }

setTimeout(() => logElapsedTime('Timer 1'), TIMER_1_DELAY);
setTimeout(() => logElapsedTime('Timer 2'), TIMER_2_DELAY);
setTimeout(() => logElapsedTime('Timer 3'), TIMER_3_DELAY);

fs.writeFile(FILE_PATH, 'Siarheyenka I.I. file', (err) => {
    if (err) throw err;
    logElapsedTime('File write');

fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) throw err;
    logElapsedTime('File read');
    console.log(`File content: ${data}`);
});
});

setImmediate(() => logElapsedTime('setImmediate'));