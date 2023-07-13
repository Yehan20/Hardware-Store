import express  from "express";
import Logger from "./logger/logger";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// routers
import userRouter from './routes/userRoutes';
import productRouter from './routes/productRoutes';
import cartRouter from './routes/cartRoutes';
import orderRouter from './routes/orderRoutes'
import stripeRouter from './routes/stripeRoutes';

dotenv.config();

const mongoURL = process.env.MONGO_DB_ATLAS || '';

const app = express();


// only start the server if we connect to mongo db
mongoose.connect(mongoURL,{retryWrites:true}).then((response)=>{
     app.listen(3001,()=>{
          Logger.info("Server Running")
      })  
}).catch(err=>Logger.error(err.message))


// logger effect
app.use((req,res,next)=>{
     Logger.info(`INCOMMING REQUEST-> ${req.method} | ${req.url} | IP ${req.socket.remoteAddress} `)
     res.on('finish',()=>{
        Logger.info(`REQUEST END-> ${req.method} | ${req.url} | IP ${req.socket.remoteAddress} `)
     }) 
     next()
})

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(cors());

app.get('/ping',(req,res)=>{
     res.status(200).json({message:'Pong'})
})

app.use('/user',userRouter);
app.use('/products',productRouter);
app.use('/cart',cartRouter);
app.use('/orders',orderRouter)
app.use('/stripe',stripeRouter);


