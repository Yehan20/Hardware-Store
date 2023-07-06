import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Bg from '../assets/images/login.jpg'
import { Andriod } from '../Responsive';
document.title='Login';

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
`


const InputContainer = styled.div``


const Input = styled.input`display:block; border:1px solid #ccc; &:focus{
  outline:0 ; border:1px solid #ccc;
} padding:0.5em 1em; margin-top:1em; margin-bottom:0.5em; width:100%;`

const Label = styled.label` color:#fff;`

const Button = styled.button`display:inline-block; width:100%; font-family:'Poppins',sans-serif; color:#fff; padding:0.4em 1em;
 margin-top:1.5em; border:0; background-color:rgb(255, 93, 0);`

const Title = styled.h2`text-align:center; font-family:'Rajdhani',sans-serif; color:#fff;`

const Error = styled.div``

const Desc = styled.p`
  text-align:center ;
  margin:0 ;
  color:#fff;
  a{
    color:orange;
  }
`


const Register = () => {

  useEffect(()=>{
    document.title='Register'
  },[])
  
  return (
     <Container>
        <Title>Register</Title>
        <Form>
            <InputContainer>
              <Label>Username</Label>
              <Input/>
            </InputContainer>

            <InputContainer>
              <Label>Email</Label>
              <Input type={'email'}/>
            </InputContainer>

            <InputContainer>
              <Label>Password</Label>
              <Input type={'password'}/>
            </InputContainer>  

            <Button type='submit'>Register</Button>   
        </Form>
        <Desc>Have an Account Click <Link to={'/login'}>to Login </Link></Desc>
        <Error>
             <Desc></Desc>
        </Error>
     </Container>
  )
}

export default Register