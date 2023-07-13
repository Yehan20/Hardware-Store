import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { getSingleProduct } from '../slices/productSlice';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';


const URL = 'http://localhost:3001/products/edit'

const Edit = () => {

    type InputEvent =  React.ChangeEvent<HTMLInputElement> |React.ChangeEvent<HTMLTextAreaElement>  |React.ChangeEvent<HTMLSelectElement>

    const {id} = useParams();
    const {singleProduct} = useAppSelector((state)=>state.Products)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [product,setProduct] = useState({name:singleProduct.name, desc:singleProduct.desc, price:singleProduct.price,
      inStock:singleProduct.inStock});
    const [error,setError] = useState('');
    const [toggle,setToggle] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false);

    const handleChange=(event:InputEvent)=>{
      console.log(event);
      const name = event.target.name;
      const value =event.target.value;
      setProduct({...product,[name]:value})
    }

    console.log(product);

    const handleUpdate = async()=>{
      try{
          setLoading(true)

          const newProduct ={...product};
          const Token = localStorage.getItem('adminToken');
  
          const updatedProduct = await axios.put(`${URL}/${id}`,{
              ...newProduct
          },{
               headers:{
                   'Authorization':`Bearer ${Token}`
               }
          })
          console.log(updatedProduct)
          setError('')
          setLoading(false)
          navigate('/')
  
          
      }catch(e:any){
          // console.log(e.response.data);
          setToggle(!toggle)
          setLoading(false)
          if(!e.response.data.message){
              setError(e.message);
              return
          }
          setError(e.response.data.message);
      }
  
  
    }

    useEffect(()=>{
      dispatch(getSingleProduct(id as string))
    },[])

    useEffect(()=>{
      setProduct({name:singleProduct.name, desc:singleProduct.desc, price:singleProduct.price,
        inStock:singleProduct.inStock})
    },[singleProduct])

    useEffect(()=>{
      error && toast(error,{
   
           position: "top-center",
           autoClose: 1000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: false,
           draggable: false,
           type:'error',
           progress: undefined,
           theme: "light",
           
       
         })
     },[toggle])
  
  return (
    <>
      <div className="container update">
       <ToastContainer/>
       <h2>Edit Product</h2>
       {
        singleProduct.name && (
           <div className='edit-product' data-aos='fade-up' data-aos-duration='2000'>
               <div className="profile">
                  <div>
                    <img src={singleProduct.img} alt={singleProduct.name} />
                    <h3>{singleProduct.name}</h3>
                  </div>

                  <p>id : {singleProduct._id}</p>
                  <p> රු: {singleProduct.price}</p>
                  {singleProduct.inStock?<p>In Stock</p>:<p>Not in Stock</p>}
                         
               </div>
               <div className="edit-info">
                  <form>
                    <div className="col">
                      <div>
                          <label htmlFor="name">Name</label>
                          <input type="text"   name='name' onChange={(e:InputEvent)=>handleChange(e)}  value={product.name} />
                        </div>
                        <div>
                          <label htmlFor="desc">Desc</label>
                          <textarea  id="desc"  name='desc' onChange={(e:InputEvent)=>handleChange(e)}  value={product.desc}> </textarea>
                        </div>
                        <div>
                          <label htmlFor='price'>Price</label>
                          <input type="number"  name='price' onChange={(e:InputEvent)=>handleChange(e)} value={product.price} />
                        </div>
                        <div>
                          <label htmlFor="">In Stock</label>
                        <select name="inStock" onChange={(e:InputEvent)=>handleChange(e)} id="">
                            <option value={`${singleProduct.inStock?'true':'false'}`}>{singleProduct.inStock?'Yes':'No'}</option>
                            <option value={`${!singleProduct.inStock?'true':'false'}`}>{!singleProduct.inStock?'Yes':'No'}</option>
                        </select>
                        </div>
                    </div>
                    <div className="col">
                       <img src={singleProduct.img} alt={singleProduct.name} />
                       <button type='button' disabled={loading} onClick={handleUpdate}>
                            {loading?'Please wait ...':'Update'}
                        </button>
                    </div>

                  </form>
               </div>
           </div>
        )
       }
    </div>
    </> 
  )
}

export default Edit