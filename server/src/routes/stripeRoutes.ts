
import expres from 'express';
import stripeController from '../controllers/stripeController';




const  Router = expres.Router();

Router.post('/pay',stripeController.makePayment)

export default Router;