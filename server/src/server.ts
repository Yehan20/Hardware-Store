import express  from "express";
import Logger from "./logger/logger";
import dotenv from 'dotenv';
import mongoose from 'mongoose';


// routers
import userRouter from './routes/userRoutes';
import productRouter from './routes/productRoutes';
import cartRouter from './routes/cartRoutes';
import orderRouter from './routes/orderRoutes'

dotenv.config();

const mongoURL = process.env.MONGO_URL || '';

const app = express();

mongoose.connect(mongoURL,{retryWrites:true}).then((response)=>{
     app.listen(3001,()=>{
          Logger.info("Server Running")
      })  
}).catch(err=>Logger.error(err.message))


app.use((req,res,next)=>{
     Logger.info(`INCOMMING REQUEST-> ${req.method} | ${req.url} | IP ${req.socket.remoteAddress} `)
     res.on('finish',()=>{
        Logger.info(`REQUEST END-> ${req.method} | ${req.url} | IP ${req.socket.remoteAddress} `)
     }) 
     next()
})

app.use(express.json())

app.get('/ping',(req,res)=>{
     res.status(200).json({message:'Pong'})
})

app.use('/user',userRouter);
app.use('/products',productRouter);
app.use('/cart',cartRouter);
app.use('/order',orderRouter)

