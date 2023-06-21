import React from 'react'
import { CategoryItemType } from '../../types/types'
import { ProductContainer, Image, ButtonContainer, Button } from './style'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
const Product = ({ product }: CategoryItemType) => {
  return (
    <ProductContainer>
      <Image src={product?.img} alt='product' />
      <ButtonContainer>
        <Button>
          <FaSearch />
        </Button>
        <Button>
          <FaHeart />
        </Button>
        <Button>
          <FaShoppingCart />
        </Button>
      </ButtonContainer>
    </ProductContainer>
  )
}

export default Product