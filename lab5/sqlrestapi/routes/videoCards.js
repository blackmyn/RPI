const express = require('express');
const router = express.Router();
const VideoCard = require('../db/videoCards');


router.get('/videocards', async (req, res) => {
  try {
    const videoCards = await VideoCard.getAll();
    res.json(videoCards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/videocards/:id', async (req, res) => {
  try {
    const videoCard = await VideoCard.getById(req.params.id);
    if (videoCard) {
      res.json(videoCard);
    } else {
      res.status(404).json({ message: 'Video card not found' });
    } 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/videocards', async (req, res) => {
  try {
    const newVideoCardId = await VideoCard.create(req.body);
    res.status(201).json({ id: newVideoCardId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/videocards/:id', async (req, res) => {
  try {
    const updatedRows = await VideoCard.update(req.params.id, req.body);
    if (updatedRows > 0) {
      res.json({ message: 'Video card updated successfully' });
    } else {
      res.status(404).json({ message: 'Video card not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/videocards/:id', async (req, res) => {
  try {
    const deletedRows = await VideoCard.delete(req.params.id);
    if (deletedRows > 0) {
      res.json({ message: 'Video card deleted successfully' });
    } else {
      res.status(404).json({ message: 'Video card not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
