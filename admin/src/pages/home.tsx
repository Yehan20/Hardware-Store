import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors'
import { getProducts } from '../slices/productSlice';
import Product from '../components/product';
import {Spinner} from 'react-spinners-css'
import { useLocation } from 'react-router';


const Home = () => {
  const dispatch = useAppDispatch();
  const {products,status} = useAppSelector(state=>state.Products);
  const location = useLocation();



  
  useEffect(()=>{
    // if(location.state!){
    //     toast("New Product Added",{
 
    //     position: "top-center",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: false,
    //     type:'error',
    //     progress: undefined,
    //     theme: "light",
    //   })
    // }
    dispatch(getProducts())
  },[])
 
  if(status==='loading'){
    return <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><Spinner color='orangered'/></div>
  }
  return (
    <div className='table-container'>

      <table  className='product-table' data-aos='fade-up' data-aos-duration='2000'>
         <thead>
             <tr>
              <th></th>
               <th>ProductName</th>
               <th>Category</th>
               <th>Price</th> 
               <th>in Stock</th>
              <th>Action</th>
             </tr>
         </thead>
         <tbody>
          {products && products.map((product,index)=>{
              return <Product product={product} key={index}/> 
          })
          }
          </tbody>
      </table>
     </div>
  )
}

export default Home