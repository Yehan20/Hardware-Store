import React, { useEffect, useState } from 'react'
import { CategoryItemType } from '../../types/types'
import { ProductContainer, Image, ButtonContainer, Button } from './style'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_selectors'
import { addCart, setCart } from '../../slices/cartSlice'

const Product = ({ product }: CategoryItemType) => {

  const dispatch = useAppDispatch();
  const {cart,status,toggleSet} = useAppSelector(state=>state.Cart)
  const {user} = useAppSelector(state=>state.Auth)
  const [mounted,setMounted] = useState(false);


  const handleClick = ()=>{

    const item = {
      name:product?.name,
      amount:1,
      price:product?.price ,
      img:product?.img,
      category:product?.category,
   }
   
   dispatch(addCart(item))


   setMounted(true)

  }
  useEffect(()=>{
    if(mounted){
      console.log('set cart run');
      dispatch(setCart({cart,id:user._id}))
    }
  },[toggleSet])

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