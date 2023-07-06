import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container, CarouselContainer, Details, Title } from './style'

import Image1 from '../../assets/images/slide-1.jpg'
import Image2 from '../../assets/images/slide-2.jpg'
import Image3 from '../../assets/images/slide-3.jpg'

const Slider = () => {
    return (
        <Container>
            <Carousel.Caption className='fixed-caption d-none d-md-block'>
                <CarouselContainer>
                    <Title>For All you Home and Hardware Needs</Title>
                    <Details>
                        Find Everthing from Indor to Outdoor tools for both construction
                        and House you name it we got It
                    </Details>
                    <Link to='/products'>See Products</Link>
                </CarouselContainer>
            </Carousel.Caption>

            <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image1}
                        alt="Image 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="Image 2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image3}
                        alt="Image 3"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Slider