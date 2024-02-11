const fs = require('fs');

class Subscriber {
    constructor(name, logFilePath) {
        this.name = name;
        this.logFilePath = logFilePath;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        fs.appendFileSync(this.logFilePath, logMessage);
    }
}

module.exports = Subscriber;
