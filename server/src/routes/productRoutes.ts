import express from 'express';
import productControllers from '../controllers/productControllers';
import { verifyToken,verifyTokenAdmin } from '../middlewares/verify_tokens';
const router = express.Router();

router.get('/all',verifyTokenAdmin,productControllers.viewProducts)
router.get('/product/:id',productControllers.viewProduct)
router.get('/:category',productControllers.viewProductsCat)
router.post('/add',productControllers.addProduct)
router.put('/edit/:id',productControllers.editProduct)
router.delete('/delete/:id',productControllers.deleteProduct)

export default router;