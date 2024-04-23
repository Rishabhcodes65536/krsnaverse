import express from 'express';

var router = express.Router();
import adminController from '../controller/adminController.js';
import musicController from '../controller/musicController.js';
import travelController from '../controller/travelController.js';
import bookController from '../controller/bookController.js';

/* GET home page. */

router.get('/',adminController.home)
router.get('/login',adminController.login)
router.post('/login',adminController.validateLogin)
router.get('/register',adminController.register)
router.post('/register',adminController.createUserDoc)

//books section
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

//music section
router.get('/music', musicController.getAllMusic);
router.get('/music/:id', musicController.getMusicById);
router.post('/music', musicController.createMusic);
router.put('/music/:id', musicController.updateMusic);
router.delete('/music/:id', musicController.deleteMusic);

//travel section
router.get('/travel', travelController.getAllTravels);
router.get('/travel/:id', travelController.getTravelById);
router.post('/travel', travelController.createTravel);
router.put('/travel/:id', travelController.updateTravel);
router.delete('/travel/:id', travelController.deleteTravel);

// Define routes for filtering past and upcoming travels
router.get('/travel/past', travelController.getPastTravels);
router.get('/travel/upcoming', travelController.getUpcomingTravels);

//
export default router;
