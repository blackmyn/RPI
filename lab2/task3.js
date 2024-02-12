const fs = require('fs');

const filePath = 'lab2/dist/graphicsCards.json';

fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
    console.error('Произошла ошибка при чтении файла:', err);
    return;
}

const graphicsCardsArray = JSON.parse(data);

console.log('--------------------------');
for (const graphicsCard of graphicsCardsArray) {
    console.log(`GPU: ${graphicsCard.gpu}`);
    console.log(`Manufacturer: ${graphicsCard.gpuManufacturer}`);
    console.log(`Interface Type: ${graphicsCard.interfaceType}`);
    console.log(`GPU Frequency: ${graphicsCard.gpuFrequency}`);
    console.log(`Video Memory: ${graphicsCard.videoMemory}`);
    console.log('--------------------------');
}
});