import express from 'express';

var router = express.Router();
import eventController from '../controller/eventController.js';

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

export default router;