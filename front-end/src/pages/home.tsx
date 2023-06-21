import React from 'react'
import AnnounceMent from '../components/AnnounceMent'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Product from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
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