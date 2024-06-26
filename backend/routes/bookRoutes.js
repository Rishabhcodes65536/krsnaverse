import express from 'express';

var router = express.Router();
import bookController from './../controller/bookController.js';

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

export default router;
