import express from 'express';
import orderController from '../controllers/orderController';

const router =  express.Router();

router.post('/add',orderController.addOrder)
router.get('/viewOrder',orderController.addOrder)
router.get('/viewAll',orderController.addOrder)
router.post('/sales',orderController.addOrder)

export default router;