import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import {FaTrashAlt} from 'react-icons/fa'
import { FaPlus, FaMinus } from 'react-icons/fa'
import * as BreakPoints from '../Responsive';
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { calculateTotal, incrementItem,decrementItem, removeItem, checkLogged, loadCart, clearCart, emptyCart } from '../slices/cartSlice';
import StripeCheckout from 'react-stripe-checkout';
import {setCart} from '../slices/cartSlice'
import img from '../assets/images/Logo.png'
import axios from 'axios';

const stripeCheckoutSpan = document.querySelector('.StripeCheckout span');
if (stripeCheckoutSpan) {
  stripeCheckoutSpan.textContent = 'Pay';
}


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

const Button = styled.button`
  background-color:transparent;
  border:0;
  display:inline-block ;
  font-size:1.1rem ;
  vertical-align:center ;
  cursor:pointer ;
`
const DeleteButton = styled.button`
  background-color:transparent;
  border:0;
  display:inline-block ;
  font-size:1.1rem ;
  vertical-align:center ;
  cursor:pointer ;
`


const Amount = styled.h3`
   font-size:1.4rem;  
`
const Price = styled.h3`
 width:100% ;
 font-size:1.3rem;
 ${BreakPoints.Andriod({width:'auto',marginLeft:'auto'})};
`

//  summary
const SummaryHead = styled.h3``;
const SummaryDesc = styled.p``;
const CheckoutButton = styled.button`
  background:rgb(255, 93, 0);
  color:#fff;
  border:0;
  padding:0.5em 1em;
  &:hover{
    opacity:0.7;
  }
`;

// Discount
const Cart = () => {

   let Key = import.meta.env.VITE_STRIPE_KEY

   const {cart,totalamount,total} = useAppSelector((state)=>state.Cart)
   console.log(cart);
   const {user} = useAppSelector((state)=>state.Auth)
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const [token,setToken] = useState<any>();
   const [mounted,setMounted] = useState(false);


   useEffect(()=>{
      document.title = 'Cart';
   },[])


   const increaseItem = (name:string)=>{
       setMounted(true)
       dispatch(incrementItem(name))
   }

   const decreaseItem  = (name:string)=>{
       setMounted(true)
       dispatch(decrementItem(name))
   }

   const handleDelete = (name:string)=>{
       setMounted(true)
       dispatch(removeItem(name));
   }

   const handleCheckout = ()=>{
      if(!user.name){
        dispatch(checkLogged())
        return 
      }
   }

   const handleClearCart = ()=>{
       setMounted(true);
       dispatch(emptyCart())
   }
   

   // when we change the cart this run
   useEffect(()=>{
      if(mounted){
        console.log('set cart run');
        dispatch(setCart({cart,id:user._id}))
      }
    },[cart])
     

    // when we empty cart this run
    useEffect(()=>{
      if(mounted && cart.length<1){
        console.log('set cart run');
        dispatch(clearCart(user._id))
      }
    },[cart])
    
    // each change in cart trigger this 
    useEffect(() => {
      dispatch(calculateTotal())
    }, [cart])

    const onToken = (token:any) => {
         // You can receive hint from token type here
         if(!token)return 
         console.log(token);
         setToken(token)
        
    }

    useEffect(()=>{
       const makePayment=async()=>{
         const jwtToken = localStorage.getItem('token');
         const currentCart = cart;

         await dispatch(clearCart(user._id))
       

      
            try{
               const response = await axios.post('http://localhost:3001/stripe/pay',{
                  tokenId:token.id,
                  amount:total.final * 100,
                  price:total.final,
                  userId:user._id,
                  items:currentCart,
                  address:{
                     city:token.address_city,
                     country:token.address_country
                  }
              },{
               headers:{
                  'Authorization':`Bearer ${jwtToken}`
               }
              })
              dispatch(emptyCart())
              navigate('/success',{state:{data:response.data}})
            }catch(e:unknown){
               if(e instanceof Error){
                  console.log(e.message);
               }
   
            }
         


       }
       token && makePayment();
    },[token])
   
   return (
      <Container>

         <Title>Your Cart</Title>

         <CartNav>
            <CartButton border='' text='white' clr='black' to={'/products'}>Continue Shopping</CartButton>
            <CartHeading>Shopping Bag ({totalamount})</CartHeading>
            <CheckoutButton onClick={handleClearCart}>Clear Cart</CheckoutButton>
            <CartButton border='grey' text='black' clr='white' to={'/'}>Checkout</CartButton>
         </CartNav>

         <CartDeatils>
            <CartItems>
               {cart.length>0 && cart.map((item,index)=>{
                  return(
                     <CartItem key={index}>
                        <Image src={item.img} alt='Image' />
                        <CartItemBody>
                           <CartItemDetail>
                              <Desc><Bold>Product Name</Bold> {item.name}</Desc>
                              <Desc><Bold>Category</Bold> {item.category}</Desc>
                           </CartItemDetail>
                           <CartItemPrice>
                              <Button title='Increase Amount' onClick={()=>increaseItem(item.name)}><FaPlus/></Button>
                              <Amount>{item.amount}</Amount>
                              <Button title='Delete Amount' onClick={()=>decreaseItem(item.name)}><FaMinus /></Button>
                              <Price> රු {item.price}</Price>
                           </CartItemPrice>
                        </CartItemBody>
                        <DeleteButton onClick={()=>handleDelete(item.name)} title='Remove Item'>
                             <FaTrashAlt/>
                        </DeleteButton>
                  </CartItem>)
               })}

            </CartItems>

            <CartSummary>
               <SummaryHead>Summary</SummaryHead>
               <SummaryDesc>Subtotal <Bold>රු : {total.subtotal.toLocaleString()}</Bold></SummaryDesc>
               <SummaryDesc>Estimated Discount : <Bold>{total.discount}%</Bold></SummaryDesc>
               <SummaryDesc>Total <Bold>රු : {total.final.toLocaleString()}</Bold></SummaryDesc>
               {token ? <span>Processing ....</span>:(
                  user.name ? 
                  
                  <StripeCheckout 

                  name='Tool Land' 
                  image={img}
                  amount= {total.final * 100} // cents
                  description={`Your total is  RS : ${total.final.toLocaleString()} `}
                  currency='LKR'
                  stripeKey={Key}
                  shippingAddress
                  billingAddress
                  token={onToken}/>:
                
                <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
                )}
            </CartSummary>

         </CartDeatils>
      </Container>
   )
}

export default Cart