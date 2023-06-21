import React from 'react'
import { useLocation } from 'react-router'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { GlobalStyles } from '../styled/default'

const RootLayout = () => {
  const location = useLocation();
  const canShow=(location.pathname.split('/')[1])===('login') ||(location.pathname.split('/')[1]).includes('register') 
  console.log(canShow);  
  return (
    <>
     <GlobalStyles/>
     {!canShow&& <Header/>}
     <Outlet/>
     <Footer/>
    </>
  )
}

export default RootLayout