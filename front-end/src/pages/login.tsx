import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Bg from '../assets/images/login.jpg'
import {Andriod,LG} from '../Responsive'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { login } from '../slices/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import Notfication from '../components/Notifcation';

const Form = styled.form`padding-bottom:1em;  margin:0em auto; width:100%; max-width:550px; font-family:'poppins',sans-serif;`

const Container = styled.div`
padding:1em 5em; display:flex; 
flex-direction:column; 
background-color:rgba(0,0,0,0.7);
background-image:url(${Bg});
background-repeat:no-repeat; 
background-size:100%; background-position:left;
background-blend-mode:multiply;
${Andriod({padding:'1em 2em',backgroundSize:'cover'})};
${LG({padding:'10em 2em'})};
`


const InputContainer = styled.div``

const Input = styled.input`display:block; border:1px solid #ccc; &:focus{
    outline:0 ; border:1px solid #ccc;
} padding:0.5em 1em; margin-top:1em; margin-bottom:0.5em; width:100%;`

const Label = styled.label` color:#fff;`

const Button = styled.button`display:inline-block; width:100%; font-family:'Poppins',sans-serif; color:#fff; padding:0.4em 1em;
 margin-top:1.5em; border:0; background-color:rgb(255, 93, 0);
   &:hover{
     opacity:0.8;
   }
 `

const Title = styled.h2`text-align:center; font-family:'Rajdhani',sans-serif; color:#fff;`

const Error = styled.div``

const Desc = styled.p`
  text-align:center ;
  margin:0 ;
  color:#fff;
  font-family:'Poppins',sans-serif;
  a{
    color:orange;
  }
`



const Login = () => {

  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const navgiate = useNavigate();


  const dispatch = useAppDispatch();
  const {user,error,loading} = useAppSelector((state)=>state.Auth)
  

   console.log(user);


  const handleClick = ()=>{
    console.log('clicked')
     const User ={
       username,password
     }
     
     dispatch(login(User))
  }

  useEffect(()=>{
     if(user){
        localStorage.setItem('token',user.token);
        navgiate('/');
     }
  },[user])
  
  useEffect(()=>{
    document.title='Login'
  },[])
  
  return (
     <Container>
        <Title>Login </Title>
        <Form>
            <InputContainer>
              <Label>Username</Label>
              <Input value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </InputContainer>

            <InputContainer>
              <Label>Password</Label>
              <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </InputContainer>  

            <Button disabled={loading} onClick={handleClick} type='button'>Login</Button>   
        </Form>
        <Desc>Not a user Click <Link to='/register'>here</Link> to make one</Desc>
        {/* <Error>
             <Desc>{errormsg}</Desc>
        </Error> */}
        <Notfication />
     </Container>
  )
}

export default Login