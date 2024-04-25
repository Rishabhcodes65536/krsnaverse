import express from 'express';

var router = express.Router();
import bookController from './../controller/bookController.js';
import verifyToken from '../middleware/validation.js';

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/',validateToken, bookController.placeOrder);
export default router;
