import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import productImg from '../assets/images/product-1.jpg';
import { FaPlus, FaMinus } from 'react-icons/fa'
import * as BreakPoints from '../Responsive';
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { calculateTotal } from '../slices/cartSlice';


type Clr = {
   clr: string,
   text: string,
   border: string
}

const Container = styled.div`
  padding:2em 5em ;
  ${BreakPoints.Tablet({padding:'2em 2em'})};
`;
const Title = styled.h2`
  font-family:'Rajdhani',sans-serif;
  font-size:3rem ;
  text-align:center ;
`;

const CartNav = styled.div`
  margin-top:2em ;
  display:flex ;
  justify-content:space-around ;
  font-size:1.3rem ;
  align-items:center ;
  font-family:'Rajdhani',sans-serif;
  
  ${BreakPoints.Andriod({flexWrap:'wrap',gap:'1em',margin:'0'})};
  *{
     ${BreakPoints.Andriod({width:'250px'})}; 
   }
`;
const CartButton = styled(Link) <Clr>`
   background-color:${props => props?.clr} ;
   color:${props => props?.text} ;
   border:1px solid ${props => props?.border};
  ${BreakPoints.Andriod({margin:'0em 0'})};
   display:inline-block;
   padding:0.5em 2em;
   text-decoration:none;
   font-size:1.3rem ;
   ${BreakPoints.Andriod({fontSize:'1rem'})};
   &:hover{
      opacity:0.6;
      color:${props => props?.text};
   }

`;
const CartHeading = styled.h3`  font-size:1.3rem ;
     ${BreakPoints.Andriod({fontSize:'1rem'})};
`;
// const Title= styled.h2``;
const CartDeatils = styled.div`
  display:flex ;
  align-items:flex-start;
  margin-top:2em ;
  gap:1.5em;
  ${BreakPoints.Tablet({padding:'2em 2em'})};
  ${BreakPoints.Andriod({flexDirection:'column',padding:'0em 0'})};
`
const CartItems = styled.div`

 width:75% ;
 ${BreakPoints.TabVertical({width:'70%'})}
 ${BreakPoints.Tablet({width:'100%'})};
`
const CartSummary = styled.div`
  margin-top:2em ;
  padding:1em ;
  border:1px solid #ccc ;
  border-radius:12px ;
  flex-grow:1 ;
  ${BreakPoints.Tablet({width:'100%'})};
  font-family: 'Poppins';
`
const Image = styled.img`
  width:120px ;
  ${BreakPoints.Andriod({width:'200px'})};
`
const CartItem = styled.div`
  display:flex ;
  /* flex-wrap:wrap ; */
  gap:1em;
  align-items:center ;
  padding:1em ;
  border-bottom:1px solid #ccc ;
  font-family:'poppins',sans-serif ;
  ${BreakPoints.Andriod({flexWrap:'wrap'})};
`;
const CartItemBody = styled.div`
  display:flex ;
  width:100% ;
  ${BreakPoints.Andriod({flexDirection:'column'})};
`;

const CartItemDetail = styled.div`
  width:100%;

`;
const Bold = styled.b``;
const Desc = styled.p``;
const CartItemPrice = styled.div`
  width:100%;
  display:flex ;
  flex-wrap:wrap ;
  align-content:flex-start ;
  gap:1em;
`;

const Button = styled.div`
  display:inline-block ;
  font-size:1.2rem ;
  vertical-align:center ;
  cursor:pointer ;
`

const Amount = styled.h3`
   font-size:1.3rem;  
`
const Price = styled.h3`
 width:100% ;
 font-size:1.3rem;
 ${BreakPoints.Andriod({width:'auto',marginLeft:'auto'})};
`

//  summary
const SummaryHead = styled.h3``;
const SummaryDesc = styled.p``;
const CheckoutButton = styled.button``;

// Discount


const Cart = () => {
   const {cart,totalamount,total} = useAppSelector((state)=>state.Cart)
   const dispatch = useAppDispatch();

   useEffect(() => {
      document.title = 'Cart';
       dispatch(calculateTotal())
   }, [])
   return (
      <Container>
         <Title>Your Cart</Title>
         <CartNav>
            <CartButton border='' text='white' clr='black' to={'/products'}>Continue Shopping</CartButton>
            <CartHeading>Shopping Bag ({totalamount})</CartHeading>
            <CartHeading>Your Wish List</CartHeading>
            <CartButton border='grey' text='black' clr='white' to={'/'}>Checkout</CartButton>
         </CartNav>

         <CartDeatils>

            <CartItems>
               {cart && cart.map((item,index)=>{
                  return(
                     <CartItem key={index}>
                        <Image src={item.img} alt='Image' />
                        <CartItemBody>
                           <CartItemDetail>
                              <Desc><Bold>Product Name</Bold> {item.name}</Desc>
                              <Desc><Bold>Category</Bold> {item.category}</Desc>
                           </CartItemDetail>
                           <CartItemPrice>
                              <Button><FaPlus/></Button>
                              <Amount>{item.amount}</Amount>
                              <Button><FaMinus /></Button>
                              <Price> රු {item.price}</Price>
                           </CartItemPrice>
                        </CartItemBody>
                     </CartItem>
               )
               })}

            </CartItems>

            <CartSummary>
               <SummaryHead>Summary</SummaryHead>
               <SummaryDesc>Subtotal <Bold>රු : {total.subtotal.toLocaleString()}</Bold></SummaryDesc>
               <SummaryDesc>Estimated Discount : <Bold>{total.discount}%</Bold></SummaryDesc>
               <SummaryDesc>Total <Bold>රු : {total.final}</Bold></SummaryDesc>
               <CheckoutButton>Checkout</CheckoutButton>
            </CartSummary>

         </CartDeatils>
      </Container>
   )
}

export default Cart