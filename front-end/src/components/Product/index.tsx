import React from 'react'
import { CategoryItemType } from '../../types/types'
import { ProductContainer, Image, ButtonContainer, Button } from './style'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Product = ({ product }: CategoryItemType) => {
 // console.log(product);
  return (

     <ProductContainer >
      <Image src={product?.img} alt='product' />
      <ButtonContainer>
         <Link to={'/products/product/'+product?._id}>
          <Button title='View Product'>
          <FaSearch />
          </Button>
         </Link>
        <Button title='Add to WishList'>
          <FaHeart />
        </Button>
        <Button title='Add to Cart'>
          <FaShoppingCart />
        </Button>
      </ButtonContainer>
    </ProductContainer>

  )
}

export default Product