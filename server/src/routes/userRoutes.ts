import express from 'express';
import userControoler from '../controllers/userController'
import {verifyToken, verifyTokenAdmin} from '../middlewares/verify_tokens'
const router = express.Router();

router.post('/register',userControoler.register)
router.post('/login',userControoler.login)
router.post('/adminlogin',userControoler.adminLogin)
router.post('/getUser',verifyToken,userControoler.getUser)
router.post('/viewUsers',verifyTokenAdmin,userControoler.viewUsers)
// router.get('/login',)
export default router;