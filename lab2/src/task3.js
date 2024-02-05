const fs = require('fs');

const filePath = 'lab2/dist/graphicsCards.json';

fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
    console.error('Произошла ошибка при чтении файла:', err);
    return;
}

const graphicsCardsArray = JSON.parse(data);

console.log(graphicsCardsArray);
});