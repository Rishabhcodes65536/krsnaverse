import express from 'express';

var router = express.Router();
import bookController from './../controller/bookController.js';

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);

export default router;
