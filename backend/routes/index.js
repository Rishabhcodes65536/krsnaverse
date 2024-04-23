import express from 'express';

var router = express.Router();
import userController from '../controller/userController.js';

/* GET home page. */

router.get("/",userController.home)
router.get("/login",userController.login)
router.post("/login",userController.validateLogin)
router.get("/register",userController.register)
router.post("/register",userController.createUserDoc)

export default router;
