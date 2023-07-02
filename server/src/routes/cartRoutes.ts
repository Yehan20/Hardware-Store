import express from "express";
import cartControllers from "../controllers/cartControllers";
import {verifyToken,verifyTokenAdmin} from '../middlewares/verify_tokens'
const router = express.Router();

router.post('/manage',verifyToken,cartControllers.manageCart);
router.post('/get',cartControllers.getCart);
router.post('/clear',verifyToken,cartControllers.clearCart);

export default router