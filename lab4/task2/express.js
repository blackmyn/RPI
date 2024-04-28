import express from 'express';
import path from 'path';
import morgan from 'morgan';
import fs from 'fs';

const __dirname = path.resolve();
const app = express();
const port = 3000;

var accessLogFile = fs.createWriteStream(__dirname + 'express-log.txt', {flags: 'a'});

app.use(morgan('combined', {stream: accessLogFile}))

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, http://localhost:${port}/`);
});