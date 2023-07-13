import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import Person1 from '../../assets/images/person-1.jpg'
import Person2 from '../../assets/images/person-2.jpg'
import Person3 from '../../assets/images/person-3.jpg'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
const MainContainer = styled.div`
  padding:4em 10em;
`

const Container = styled.div`
 
   text-align:center;
   transition:all 1000ms ease-in;
`
const Title = styled.h3`
 font-family:'Poppins',sans-serif;
 margin-top:0.5em;
font-size:1rem;

`

const Desc= styled.p`
 font-family:'Poppins',sans-serif;
 margin-bottom:1em;
`

const Image = styled.img`
  width:100px;
  height:100px;
  border-radius:50%;
  display:block;
  margin:0 auto;
`
const MainTitle = styled.h2`
  font-family:'Rajdhani';
  text-align:center;
  font-size:3rem;
`

const Testimonials = () => {
    const settings:any= {
        infinite: true,
        dots: false,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode:true,
        speed:2000,
 
  };
  return (
    <MainContainer   data-aos='fade-up' data-aos-duration='2000'>
        <MainTitle>Testimonials</MainTitle>
         <Slider  {...settings}>
       <Container>
          <Image src={Person1} alt='Image'/>
          <Title>Jon Doe</Title>
          <Desc><sup><FaQuoteLeft/></sup>Very good Place <sup><FaQuoteRight/></sup></Desc>
       </Container>
       <Container>
          <Image src={Person2} alt='Image'/>
          <Title>Jene Mary</Title>
          <Desc><sup><FaQuoteLeft/></sup> Cheap Products <sup><FaQuoteRight/></sup></Desc>
       </Container>
       <Container>
          <Image src={Person3} alt='Image'/>
          <Title>Tom Smith</Title>
          <Desc><sup><FaQuoteLeft/></sup> Products are good Quality <sup><FaQuoteRight/></sup></Desc>
       </Container>
    </Slider>

    </MainContainer>
  )
}

export default Testimonials