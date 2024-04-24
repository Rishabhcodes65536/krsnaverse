import express from 'express';

var router = express.Router();
import musicController from '../controller/musicController.js';

router.get('/', musicController.getAllMusic);
router.get('/:id', musicController.getMusicById);

export default router;