import express from 'express'
import { getVideoCardsController, getVideoCardByIdController, createVideoCardController, updateVideoCardController, deleteVideoCardController } from '../../controllers/bybazaarController.js';

const router = express.Router();

router.get('/', (req, res) => {
  getVideoCardsController(req, res);
});

router.get('/:id', (res,req) => {
  res.send('Get existing video card  with id: ' + req.params.id);
});

router.get('/', (req, res) => {
  res.send('Create new video card');
});

router.get('/:id', (req,res)=> {
  res.send('Update existing video card with id: ' + res.params.id);
});

router.get('/:id', (req,res)=> {
  res.send('Delete existing video card with id: ' + res.params.id);
});

export default router