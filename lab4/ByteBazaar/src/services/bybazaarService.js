import db from '../database/db.json' assert { type: "json" };
import { v4 as uuidv4 } from 'uuid';

import VideoCard from '../database/VideoCards.js';

export const getVideoCards = () => {
  return db.videoCards;
}

const getVideoCardById = () => {
  return;
};

const createVideoCard = (newVideoCard) => {
  const videoCardToInsert = {
    ...newVideoCard,
    id: uuidv4(),
    createdAt: new Date().toLocaleDateString('en-GB',{timeZone: 'UTC'}),
    updatedAt: new Date().toLocaleDateString('en-GB',{timeZone: 'UTC'}),
  };
  const createdVideoCard = VideoCard.createVideoCard(videoCardToInsert);
  return createVideoCard;
};

const updateVideoCard = () => {
  return;
};

const deleteVideoCard = () => {
  return;
};

export {
  getVideoCardById,
  createVideoCard,
  updateVideoCard,
  deleteVideoCard
}