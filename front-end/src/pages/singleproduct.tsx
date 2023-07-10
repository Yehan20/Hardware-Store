import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import * as BreakPoints from '../Responsive'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { getSingleProduct } from '../slices/productSlice';
import { useParams } from 'react-router';
import { SingleProductType } from '../types/types';
import { addCart, setCart } from '../slices/cartSlice';

const Container= styled.div`
 display:flex ;
 padding:1em 5em ;
 ${BreakPoints.Tablet({padding:'2em 2em'})};
 align-items:center ;
 gap:1em;
 ${BreakPoints.Andriod({flexDirection:'column'})};
`
const Column = styled.div`
 width:100% ;
 font-family:'Poppins',sans-serif ;
 display:flex ;
 flex-direction:column ;
 gap:1em;

`
const Img = styled.img`
  width:100% ;
  max-width:400px ;
`
const Title = styled.h2`
  font-family:'Rajdhani',sans-serif ;
  font-size:2.5rem ;
  ${BreakPoints.Tablet({fontSize:'2rem'})};
  font-weight:600 ;
`
const Desc= styled.p`
  line-height:1.7;
`
const Amount =styled.input`
   max-width:100px;
   text-align:center ;
   outline:0 ;
   border:0 ;
   &::-webkit-inner-spin-button,
   &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
}

  -moz-appearance: textfield;
  ${BreakPoints.Andriod({maxWidth:'75px'})};

`
const Price =styled.h3``
const Label = styled.span``
const AmountContainer = styled.div`
  display:flex ;
  outline:1px solid #ccc ;
  padding:0.5em ;
 
`
const Button = styled.button`
  display:inline-block ;
  background-color:rgb(255, 93, 0) ;
  padding:0.6em 1.5em ;
  border:0 ;
  color:#fff;
  ${BreakPoints.Andriod({padding:'0.6em 1em'})};
`
const Flex = styled.div`display:flex;  gap:0.5em;`
const CartButton=styled.button`
  background-color:transparent ;
  border:0 ;

`

const Colors = styled.div`
  display: flex;
  gap:10px;
`
const Color = styled.div`
   background-color:red ;
   width:15px;
   height:15px ;
   border-radius:50% ;
   cursor: pointer;
`

const SingleProduct = () => {

  const product = useAppSelector(state=>state.Products.singleProduct)
  const {cart} = useAppSelector(state=>state.Cart)
  const {user} = useAppSelector(state=>state.Auth)

  const {id}  = useParams();
  const dispatch = useAppDispatch()

  const [amount,setAmout] = useState(1)
  const [mounted,setMount] = useState(false);

  const handleClick = ()=>{
      //create an cartItem Object
      const item = {
         name:product.name,
         amount:amount,
         price:product.price * amount,
         img:product.img,
         category:product.category
      }
      dispatch(addCart(item));
      setMount(true);
  }

  useEffect(()=>{

    scroll.scrollToTop({
        duration: 150, // Specify the duration in milliseconds (e.g., 250ms)
        smooth: true, 
      })

     dispatch(getSingleProduct(id as string))
     document.title='Product'
  },[])


  useEffect(()=>{
    if(mounted){
      console.log('set cart run');
      dispatch(setCart({cart,id:user._id}))
    }
  },[cart])


  return (
     <>
        {product && <Container>
      <Column>
        <Img src={product?.img} alt='Product'/>
      </Column>
      <Column>
         <Title>{product.name}</Title>
         <Desc>{product.desc}</Desc>
         <Label>Color </Label>
         <Colors>
            <Color style={{backgroundColor:`${product.color?product.color:'red'}`}}/>
            <Color style={{backgroundColor:`${product.color?product.color:'red'}`}}/>
            <Color style={{backgroundColor:`${product.color?product.color:'red'}`}}/>
         </Colors>
         <Label>Avalibility: {product.inStock?"In Stock" : 'Out of Stock'} </Label>
         <Price>රු : {product.price * amount}</Price>
         <Label>Amount</Label>
         <Flex>
         <AmountContainer>
           <CartButton onClick={()=>setAmout((prev)=>{
               if(prev<=1){return 1}
               return prev -1
           })}>
              <FaMinus/> 
           </CartButton>  
           <Amount min='1' readOnly value={amount} type={'number'}/>
           <CartButton onClick={()=>setAmout((prev)=>prev +1)}>
              <FaPlus/>   
          </CartButton>  
          </AmountContainer>
          {product.inStock && <Button onClick={handleClick} >Add to Cart</Button>}
         </Flex>

      </Column>
    </Container>}
     </>

  )
}

export default SingleProduct