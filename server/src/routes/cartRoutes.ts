import express from "express";
import cartControllers from "../controllers/cartControllers";
const router = express.Router();

router.post('/manage',cartControllers.manageCart);
router.post('/get',cartControllers.getCart);
router.post('/clear',cartControllers.clearCart);

export default router