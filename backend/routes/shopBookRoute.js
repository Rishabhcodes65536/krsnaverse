import express from 'express';

var router = express.Router();
import bookController from './../controller/bookController.js';
import verifyToken from '../middleware/validation.js';



router.post('/',verifyToken, bookController.placeOrder);
router.get('/',verifyToken,bookController.getBookOrder);

export default router;