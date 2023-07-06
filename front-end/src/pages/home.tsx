import React, { useEffect } from 'react'
import AnnounceMent from '../components/AnnounceMent'
import Category from '../components/Category'
import Product from '../components/Products'
import Slider from '../components/Slider'

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
      <AnnounceMent/>
      {/* <Footer/> */}
    </>
  )
}

export default Home