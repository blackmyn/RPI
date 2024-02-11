const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите описание ошибки: ', function (errorDescription) {
    const now = new Date();
    const logEntry = `${now.toISOString()} - Ошибка: ${errorDescription}\n`;

fs.appendFile('lab2/dist/errorLog.txt', logEntry, (err) => {
    if (err) throw err;
    console.log('Ошибка была залогирована.');
    rl.close();
});
});

rl.on('close', function () {
process.exit(0);
});