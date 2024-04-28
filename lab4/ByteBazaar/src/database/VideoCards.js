import db from './db.json' assert { type: "json" };

import { saveToDatabase } from './utils.js';

const getVideoCards = () => {
  return db.videoCards;
}

const createVideoCard = (newVideoCard) => {
  const isAlreadyAdded =
      db.videoCards.findIndex(
          (videoCard) => videoCard.id === newWorkout.id
      ) > -1;
  if (isAlreadyAdded) {
      return;
  }
  db.videoCards.push(newVideoCard);
  saveToDatabase(db);
  return newVideoCard;
};

export default db;
export { getVideoCards, createVideoCard };
