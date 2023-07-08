import React from 'react'
import { CategoryItemType } from '../../types/types'
import { ProductContainer, Image, ButtonContainer, Button } from './style'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux_selectors'
import { addCart } from '../../slices/cartSlice'

const Product = ({ product }: CategoryItemType) => {

  const dispatch = useAppDispatch();


  const handleClick = ()=>{

    const item = {
      name:product?.name,
      amount:1,
      price:product?.price ,
      img:product?.img,
      category:product?.category,
   }
   
   dispatch(addCart(item))
  }

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
        <Button onClick={handleClick} title='Add to Cart'>
          <FaShoppingCart />
        </Button>
      </ButtonContainer>
    </ProductContainer>

  )
}

export default Product