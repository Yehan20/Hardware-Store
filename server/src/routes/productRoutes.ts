import express from 'express';
import productControllers from '../controllers/productControllers';
import { verifyToken,verifyTokenAdmin } from '../middlewares/verify_tokens';

const router = express.Router();

router.get('/all',productControllers.viewProducts);
router.get('/product/:id', productControllers.viewProduct);
router.get('/:category', productControllers.viewProductsCat);
router.post('/add',verifyTokenAdmin, productControllers.addProduct);
router.put('/edit/:id',verifyTokenAdmin, productControllers.editProduct);
router.delete('/delete/:id',verifyTokenAdmin, productControllers.deleteProduct);

export default router;