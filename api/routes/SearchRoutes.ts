import express from 'express';
import getPublicPhotos from '../controllers/SearchController';

const router = express.Router();

router.get('/search', getPublicPhotos);

export default router;
