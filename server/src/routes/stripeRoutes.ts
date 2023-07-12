
import expres from 'express';
import stripeController from '../controllers/stripeController';
import { verifyToken } from '../middlewares/verify_tokens';




const  Router = expres.Router();

Router.post('/pay',verifyToken,stripeController.makePayment)

export default Router;