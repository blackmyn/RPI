import { getVideoCards, getVideoCardById, createVideoCard, updateVideoCard, deleteVideoCard } from '../services/bybazaarService.js';

const getVideoCardsController = (req, res) => {
  const videoCards = getVideoCards();
  res.send({status: 'OK', data: videoCards});
};

const getVideoCardByIdController = (req, res) => {
  const videoCard = byteBazaarService.getVideoCardById(req.params.id);
  res.send({status: 'OK', data: videoCard});
};

const createVideoCardController = (req, res) => {
  const {body} = req;
  if (!body.interfaceType || !body.gpuManufacturer || !body.gpu || !body.gpuFrequency || !body.videoMemory) {
    res.status(400).send({
      status: 'FAILED',
      data: {
          error:
              "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
  })
  return;
  }
  const newVideoCard = {
    id: body.id,
    interfaceType: body.interfaceType,
    gpuManufacturer: body.gpuManufacturer,
    gpu: body.gpu,
    gpuFrequency: body.gpuFrequency,
    videoMemory: body.videoMemory
  };
  const createdVideoCard = byteBazaarService.createVideoCard(newVideoCard);
  res.status(201).send({
    status: 'OK',
    data: createdVideoCard,
  });
  res.send({status: 'OK', data: newVideoCard});
};

const updateVideoCardController = (req, res) => {
  const updatedVideoCard = byteBazaarService.updateVideoCard(req.params.id, req.body);
  res.send({status: 'OK', data: updatedVideoCard});
};

const deleteVideoCardController = (req, res) => {
  const deletedVideoCard = byteBazaarService.deleteVideoCard(req.params.id);
  res.send({status: 'OK', data: deletedVideoCard});
};

export {
  getVideoCardsController,
  getVideoCardByIdController,
  createVideoCardController,
  updateVideoCardController,  
  deleteVideoCardController
}