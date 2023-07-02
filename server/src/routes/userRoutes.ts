import express from 'express';
import userControoler from '../controllers/userController'
import {verifyTokenAdmin} from '../middlewares/verify_tokens'
const router = express.Router();

router.post('/register',userControoler.register)
router.post('/login',userControoler.login)
router.post('/viewUser',verifyTokenAdmin,userControoler.viewUsers)
// router.get('/login',)
export default router;