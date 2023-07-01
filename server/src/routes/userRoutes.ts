import express from 'express';
import userControoler from '../controllers/userController'
const router = express.Router();

router.post('/register',userControoler.register)
router.post('/login',userControoler.login)
// router.get('/login',)
export default router;