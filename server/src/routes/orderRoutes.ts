import express from 'express';
import orderController from '../controllers/orderController';
import {verifyTokenAdmin,verifyToken} from '../middlewares/verify_tokens'
const router =  express.Router();

router.post('/add', verifyToken,orderController.addOrder)
router.get('/viewOrder',verifyToken,orderController.addOrder)
router.get('/viewAll',verifyTokenAdmin, orderController.addOrder)
router.post('/sales',verifyTokenAdmin, orderController.addOrder)

export default router;