const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('customEvent', (message) => {
  console.log('Пользовательское событие произошло:', message);
});

myEmitter.emit('customEvent', 'Это пользовательское сообщение');