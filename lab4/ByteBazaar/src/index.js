import express from 'express';
import v1Router from './v1/routes/bybazaarRoutes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/v1/video_cards', v1Router);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}, localhost:3000/api/v1/video_cards`);
});