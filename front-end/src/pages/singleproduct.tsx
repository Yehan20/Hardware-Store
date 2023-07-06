import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FaPlus,FaMinus} from 'react-icons/fa'
import img from '../assets/images/product-1.jpg'
import { animateScroll as scroll } from 'react-scroll';
import * as BreakPoints from '../Responsive'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { getSingleProduct } from '../slices/productSlice';
import { useParams } from 'react-router';
import { SingleProductType } from '../types/types';
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
  //const [product,setProduct] = useState('')
  //let fetchedProduct = useAppSelector(state=>state.Products.singleProduct);
  const product = useAppSelector(state=>state.Products.singleProduct)

  const {id}  = useParams();
  console.log(id);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    scroll.scrollToTop({
        duration: 150, // Specify the duration in milliseconds (e.g., 250ms)
        smooth: true, 
      })
     dispatch(getSingleProduct(id as string))
     document.title='Product'
   
  },[])
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
         <Price>RS : {product.price}</Price>
         <Label>Amount</Label>
         <Flex>
         <AmountContainer>
           <CartButton>
              <FaMinus/> 
           </CartButton>  
           <Amount type={'number'}/>
           <CartButton>
              <FaPlus/>   
          </CartButton>  
          </AmountContainer>
          {product.inStock && <Button >Add to Cart</Button>}
         </Flex>

      </Column>
    </Container>}
     </>

  )
}

export default SingleProduct