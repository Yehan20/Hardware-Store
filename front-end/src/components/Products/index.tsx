import React from 'react'
import {Container} from './style'
import {SampleProducts} from '../../data/data'
import Product from '../Product'
const Products = () => {
  return (
    <Container>
        {SampleProducts.map((product)=>{
             return <Product key={product.id} product={product} />
        })}
    </Container>
  )
}

export default Products