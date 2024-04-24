import express from "express"
var router = express.Router();
import travelController from '../controller/travelController.js';



router.get('/', travelController.getAllTravels);
router.get('/:id', travelController.getTravelById);
router.get('/past', travelController.getPastTravels);
router.get('/upcoming', travelController.getUpcomingTravels);

export default router;