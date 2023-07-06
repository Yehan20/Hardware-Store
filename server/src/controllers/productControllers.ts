import {Request,Response} from 'express'
import productsModel from '../model/products'
import Logger from '../logger/logger'

const addProduct = async(req:Request,res:Response)=>{
     const {name,price,  category,img ,desc } = req.body
     Logger.info(JSON.stringify(req.body))

     if(name===''||price==='' || category===''|| img===''|| desc===''){
         return res.json({message:"fill all feilds"}).status(500)
     }

    //   check for any existing product


    try {
        const isExist =await productsModel.findOne({name:name});
        Logger.warning(`message ${isExist}`);
        if(await productsModel.findOne({name:name})){
             return res.json({message:'product is there already'}).status(500)
        }

        const addedProduct =await  productsModel.create({
            name,price,  category,img ,desc 
        })
        res.json({product:addedProduct}).status(200)
        
    } catch (error:unknown) {
        if(error instanceof Error){
            res.json({message:error.message}).status(500)
        }
    }
}
const viewProduct = async(req:Request,res:Response)=>{
    const {id} = req.params;
    try{
        const product = await productsModel.findById(id);
        res.json({product:product}).status(200)
      }catch (error:unknown) {
          if(error instanceof Error){
              res.json({message:error.message}).status(500)
          }
     }


}
const viewProducts = async(req:Request,res:Response)=>{
    try{
      const products = await productsModel.find({}).sort(({createdAt:-1}));
      res.json({products:products}).status(200)
    }catch (error:unknown) {
        if(error instanceof Error){
            res.json({message:error.message}).status(500)
        }
    }

}
const viewProductsCat = async(req:Request,res:Response)=>{
    const {category} = req.params;
    try{
        const product = await productsModel.find({category:category});
        res.json({products:product}).status(200)
      }catch (error:unknown) {
          if(error instanceof Error){
              res.json({message:error.message}).status(500)
          }
     }
}
const editProduct = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const newData = req.body;
    try{
       const updatedProduct = await productsModel.findByIdAndUpdate(id,{
         $set:newData
       },{new:true})

       res.json(updatedProduct).status(200)

    }catch(error){
        if(error instanceof Error){
            res.json({message:error.message}).status(500)
        }
    }
}

const deleteProduct = async(req:Request,res:Response)=>{
   const {id} = req.params;
   try{
      await productsModel.findByIdAndRemove(id)
      res.json({message:'deleted',id:id}).status(200)
   }catch(error){
        if(error instanceof Error){
            res.json({message:error.message}).status(500)
    }
   }
}
export default{
    addProduct,
    viewProduct,
    deleteProduct,
    viewProducts,
    editProduct,
    viewProductsCat
}