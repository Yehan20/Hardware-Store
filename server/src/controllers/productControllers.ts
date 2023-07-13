import {Request,Response} from 'express'
import productsModel from '../model/products'
import Logger from '../logger/logger'

const addProduct = async(req:Request,res:Response)=>{
     const {name,price,  category,img ,desc } = req.body
     Logger.info(JSON.stringify(req.body))

     if(name===''||price==='' || category===''|| img===''|| desc===''){
         return res.status(500).json({message:"fill all feilds"})
     }

    //   check for any existing product
    try {
        const isExist =await productsModel.findOne({name:name});
        Logger.warning(`message ${isExist}`);
        if(await productsModel.findOne({name:name})){
             return res.status(500).json({message:'product is there already'})
        }

        const addedProduct =await  productsModel.create({
            name,price,  category,img ,desc 
        })
        res.status(200).json({product:addedProduct})
        
    } catch (error:unknown) {
        if(error instanceof Error){
            res.status(500).json({message:error.message})
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
        if(newData.name===''||newData.price===''|| newData.desc===''){
            throw Error('Fill all feilds')
        }
   
        const currentproduct= await productsModel.findById(id)
        console.log(currentproduct.name,newData.name);
        if(currentproduct.name!== newData.name){
            console.log(await productsModel.findOne({name:newData.name}));
           if(await productsModel.findOne({name:newData.name})) {
             throw Error('That name is Used')
           }
        }

       const updatedProduct = await productsModel.findByIdAndUpdate(id,{
         $set:newData
       },{new:true})

       res.status(200).json(updatedProduct)
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({message:error.message})
        }
    }
}

const deleteProduct = async(req:Request,res:Response)=>{
   const {id} = req.params;
   try{
      await productsModel.findByIdAndRemove(id)
      res.status(200).json({message:'deleted',id:id})
   }catch(error){
        if(error instanceof Error){
            res.status(500).json({message:error.message})
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