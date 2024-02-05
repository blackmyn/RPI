const fs = require('fs');
const GraphicsCard = require('./graphicCard.js');

const graphicsCards = [
new GraphicsCard('PCIe 4.0', 'NVIDIA', 'RTX 4080', '1.44 GHz', '10 GB'),
new GraphicsCard('PCIe 4.0', 'AMD', 'RX 6800 XT', '2.25 GHz', '16 GB'),
];

const json = JSON.stringify(graphicsCards, null, 2);

fs.writeFile('lab2/dist/graphicsCards.json', json, (err) => {
if (err) {
    console.error('Произошла ошибка при записи файла:', err);
} else {
    console.log('Массив видеокарт сохранен в файле graphicsCards.json');
}
});