import React, { useEffect } from 'react'
import AnnounceMent from '../components/AnnounceMent'
import Category from '../components/Category'
import Product from '../components/Products'
import Slider from '../components/Slider'
import Testimonials from '../components/TesteMonials'

const Home = () => {

  useEffect(()=>{
     document.title='Tool Land'
  },[])
  
  return (
    <>
      {/* <Header/> */}
      <Slider/>
      <Category/>
      <Product/>
      <Testimonials/>
      <AnnounceMent/>
      {/* <Footer/> */}
    </>
  )
}

export default Home