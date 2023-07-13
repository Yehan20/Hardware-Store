
import styled from 'styled-components'
import {FaSadCry} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Container =styled.div`
   padding:10em 5em;
   text-align:center;
`;
const Title = styled.h3`
  font-size:3rem;
  font-family:'Rajdhani',sans-serif;
  color:orangered;
  margin-top:0.5em;
`;
const Desc  = styled.p`
  font-size:1.5rem;
  margin-bottom:0.5em;
  color:orangered;
  font-family:'Poppins',sans-serif;
  a{
    color:#000;
    text-decoration:none;
  }
`


const ErrorPage = () => {
  return (
    <Container>
        <FaSadCry fontSize={'60px'} color="orangered"/>
        <Title>404 Page not Found</Title>
        <Desc>Go back <Link to={'/'}>Home</Link></Desc>
    </Container>
  )
}

export default ErrorPage