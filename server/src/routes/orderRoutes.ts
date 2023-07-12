import express from 'express';
import orderController from '../controllers/orderController';
import {verifyTokenAdmin,verifyToken} from '../middlewares/verify_tokens'
const router =  express.Router();

router.post('/add', verifyToken,orderController.addOrder)
router.post('/view',verifyToken,orderController.veiwOrders)
router.get('/viewAll',verifyTokenAdmin, orderController.viewAllOrders)
router.post('/sales',verifyTokenAdmin, orderController.addOrder)
router.post('/clear',verifyToken,orderController.clearOrders)

export default router;