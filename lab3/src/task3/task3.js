const fs = require('fs');
const GraphicsCard = require('./graphicCard.js');
const Subscriber = require('./subscriber.js');
const ProductList = require('./productList.js');

const productList = new ProductList();

const logFilePathSubscriber1 = 'lab3/dist/Subscriber1_log.txt';
const logFilePathSubscriber2 = 'lab3/dist/Subscriber2_log.txt';

const subscriber1 = new Subscriber('Subscriber1', logFilePathSubscriber1);
const subscriber2 = new Subscriber('Subscriber2', logFilePathSubscriber2);

productList.addSubscriber(subscriber1);
productList.addSubscriber(subscriber2);

const graphicsCard1 = new GraphicsCard('PCIe', 'NVIDIA', 'RTX 3080', '1.71 GHz', '10 GB');
const graphicsCard2 = new GraphicsCard('PCIe', 'AMD', 'RX 6900 XT', '2.25 GHz', '16 GB');

productList.addProduct(graphicsCard1);
productList.addProduct(graphicsCard2);