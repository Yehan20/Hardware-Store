import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors'
import { getProducts } from '../slices/productSlice';
import Product from '../components/product';


const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state=>state.Products.products);
  console.log(products)
  useEffect(()=>{
      dispatch(getProducts())
  },[])

  return (
     <div className='table-container'>
      <table  className='product-table'>
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