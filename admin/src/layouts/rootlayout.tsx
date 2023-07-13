import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Outlet } from 'react-router'

import { GlobalStyles } from '../styled/default'
import { useAppDispatch } from '../hooks/redux_selectors'
import Header from '../components/header'
import Footer from '../components/footer'
import SideBar from '../components/sidebar'
import styled from 'styled-components'

const Split = styled.div`
  display:flex;
  flex-grow:1;
  padding-left:1em;
  
`

const RootLayout = () => {
  const location  = useLocation();
  const pageName= (location.pathname.split('/')[1])

  

  return (
    <>
     <GlobalStyles/>
     {pageName==='login'?'':<Header/>}
     {pageName==='login'?'':<SideBar/>}
     <Split>
      <Outlet/>
     </Split>
     {pageName==='login'?'':<Footer/>}
    </>
  )
}

export default RootLayout