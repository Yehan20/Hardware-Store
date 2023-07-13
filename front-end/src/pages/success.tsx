import React, { useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate, useLocation } from 'react-router'
const Container= styled.div`
  padding:4em 5em;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1em;
`
const Title = styled.h2``
const Image = styled.img`
  border-radius:50%;
  width:75px;
  height:75px;
`
const Desc= styled.p`
  font-family:'Poppins',sans-serif;
  text-align:center;
`
const Button  = styled.div`
   display:inline-block;
   padding:0.5em 1em;
   background:orange;
   font-family:'Poppins',sans-serif;
   font-size:1rem;
   font-weight:300;
   text-decoration:none;
   color:#fff;
   /* background-color:rgb(255, 93, 0); */
`
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
 
  if(!data){
     return <Navigate to={'/'} replace={true}/>
  }
  useEffect(()=>{
   // alert('payment successful')
    setTimeout(()=>{  
       navigate('/',{replace:true})
    },2000)
  },[])
  return (
     <Container>
  
      <Image src={Logo} alt='logo'/>
      <Button>Successful</Button>
        <Desc>Your payment was successful your items will be delivered within 24hrs
             <br />
              Thanks for shopping with us.
        </Desc>
       <Title></Title>
     </Container>
  )
}

export default Success