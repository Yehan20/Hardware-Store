import React from 'react'
import {Container} from './style'
import {SampleProducts} from '../../data/data'
import Product from '../Product'
import {useAppSelector} from '../../hooks/redux_selectors'
import { useLocation } from 'react-router'
import Slider from "react-slick";
import styled from 'styled-components'
import { Andriod } from '../../Responsive'

const SliderContainer = styled.div`
  padding:1em 6em;
  ${Andriod({padding:'1em 1em'})}
`
const Products = () => {
  const location = useLocation().pathname.split('/')[1]

  const settings:any= {
    infinite: true,
    dots: false,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad:false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
       
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
 

};
  
  let Items:any[] =  useAppSelector((state)=>state.Products.products)
  if(!location){
      Items = Items.slice(0,6);
  }
  
  if(!location){
    return  <SliderContainer data-aos='fade-up' data-aos-duration='2000'>
            <Slider   {...settings}>
              {Items &&  Items.map((product,index)=>{
                return <Product  key={index} product={product} />
            })}
          </Slider>
    </SliderContainer>
  }


  console.log(Items)
  return (
    <Container>
        {Items &&  Items.map((product,index)=>{
             return <Product key={index} product={product} />
        })}
    </Container>
  )
}

export default Products