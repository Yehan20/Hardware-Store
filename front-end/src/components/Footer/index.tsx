import { Button, Column, Container, Desc, FirstFooter, Icon, Icons, Input, List, ListItem, ListLink, SearchContainer, SecondFooter, Title } from './style'
import {ImLocation} from 'react-icons/im'
import {BiEnvelope,BiMobileAlt} from 'react-icons/bi';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import {BsClock} from 'react-icons/bs'


const Footer = () => {
  return (
    <Container>
        <FirstFooter>
            <Column>
               <Title>Contact Us</Title>
               <Desc>Contact Us with any of the Options mentioned below</Desc>
               <List>
                  <ListItem><ImLocation/>  715 Fake Street, New York 10021 USA</ListItem>
                  <ListItem><BiMobileAlt/> (800) 060-0730, (800) 060-0730</ListItem>
                  <ListItem><BiEnvelope/>  tooland@gmail.com</ListItem>
                  <ListItem><BsClock/> 8:00am - 11:30 pm</ListItem>
               </List>
            </Column>

            <Column>
              <Title>Information</Title>
              <List>
                <ListItem><ListLink to='/test'>About</ListLink></ListItem>
                <ListItem><ListLink to='/test'>About</ListLink></ListItem>
                <ListItem><ListLink to='/test'>About</ListLink></ListItem>
                <ListItem><ListLink to='/test'>About</ListLink></ListItem>
              </List>
            </Column>

            <Column>
               <Title>My Account</Title>
               <List>
                <ListItem><ListLink to='/test'>About</ListLink></ListItem>
                <ListItem><ListLink to='/test'>About</ListLink></ListItem>
                <ListItem><ListLink to='/test'>About</ListLink></ListItem>
              </List>
            </Column>

            <Column width={20}>
              <Title>News Letter</Title>
              <Desc>Stay in touch with our Latest Products</Desc>
              <SearchContainer>
                 <Input placeholder='email'/>
                 <Button>Subscribe</Button>
              </SearchContainer>
              <Icons>
                  <Icon href='https://www.google.com' target={'_blank'} bg='#1778f2'><FaFacebook size={'25px'} color='white'/></Icon>
                  <Icon href='https://www.google.com' target={'_blank'} bg='rgb(29, 155, 240)'><FaTwitter size={'25px'} color='white'/></Icon>
                  <Icon href='https://www.google.com' target={'_blank'} bg='purple'><FaInstagram size={'25px'} color='white'/></Icon>
              </Icons>
            </Column>
             
        </FirstFooter>
        <SecondFooter>
            <Desc>Desinged and Developed by Yehan Nilanga</Desc>
        </SecondFooter>
    </Container>
  )
}

export default Footer