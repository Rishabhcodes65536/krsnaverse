import express from 'express';

var router = express.Router();
import musicController from '../controller/musicController.js';

router.get('/music', musicController.getAllMusic);
router.get('/music/:id', musicController.getMusicById);

export default router;