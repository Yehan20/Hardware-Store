import React from 'react'
import {Container} from './style'
import {SampleProducts} from '../../data/data'
import Product from '../Product'
import {useAppSelector} from '../../hooks/redux_selectors'
import { useLocation } from 'react-router'
const Products = () => {
  const location = useLocation().pathname.split('/')[1]
  
  let Items:any[] =  useAppSelector((state)=>state.Products.products)
  if(!location){
      Items = Items.slice(0,6);
  }



  console.log(Items)
  return (
    <Container>
        {Items &&  Items.map((product,index)=>{
             return <Product key={index} product={product} />
        })}
    </Container>
  )
}

export default Products