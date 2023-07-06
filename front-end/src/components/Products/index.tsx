import React from 'react'
import {Container} from './style'
import {SampleProducts} from '../../data/data'
import Product from '../Product'
import {useAppSelector} from '../../hooks/redux_selectors'
const Products = () => {
  const Items =  useAppSelector((state)=>state.Products.products)

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