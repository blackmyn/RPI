import express, { json } from 'express';
import { readFileSync, writeFileSync } from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

const data = JSON.parse(readFileSync('./db.json'));
const videoCards = data.videoCards;

app.use(json());

app.get('/api/videocards', (req, res) => {
  res.json(videoCards);
});

app.get('/api/videocards/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const videoCard = videoCards.find(card => card.id === id);
  if (!videoCard) {
    return res.status(404).json({ message: 'Video card not found' });
  }
  res.json(videoCard);
});

app.post('/api/videocards', (req, res) => {
  const newCard = req.body;
  newCard.id = videoCards.length + 1;
  videoCards.push(newCard);
  writeFileSync('./videoCards.json', JSON.stringify(data));
  res.status(201).json(newCard);
});

app.put('/api/videocards/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = videoCards.findIndex(card => card.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Video card not found' });
  }
  videoCards[index] = req.body;
  writeFileSync('./videoCards.json', JSON.stringify(data));
  res.json(videoCards[index]);
});

app.delete('/api/videocards/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = videoCards.findIndex(card => card.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Video card not found' });
  }
  videoCards.splice(index, 1);
  writeFileSync('./videoCards.json', JSON.stringify(data));
  res.json({ message: 'Video card deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});