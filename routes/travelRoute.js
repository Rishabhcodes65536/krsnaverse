import express from "express"
var router = express.Router();
import travelController from '../controller/travelController.js';



router.get('/', travelController.getAllTravels);
router.get('/travel/:id', travelController.getTravelById);
router.get('/travel/past', travelController.getPastTravels);
router.get('/travel/upcoming', travelController.getUpcomingTravels);

export default router;