import { useEffect, useRef, useState } from 'react'
import { Container, TitleHeader, Left, Right, HeaderButton, HeaderText, FirstHeaderSection, SecondHeaderSection, ThirdHeaderSection, SearchContainer, Search, SearchButton, HeaderPara, Menu } from './styled'
import { FaChevronDown ,FaSearch} from 'react-icons/fa'
import Navigation from '../Navigation'
import { Link, useNavigate } from 'react-router-dom'
import Notfication from '../Notifcation'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_selectors'
import useCustomRef from '../../hooks/useCustomRef'
import { logout } from '../../slices/authSlice'
import { emptyCart, loadCart } from '../../slices/cartSlice'

const Header = () => {
  const user = useAppSelector(user=>user.Auth.user)
  const [show,setShow] = useState(false);
  const [searchParam,setSearchParam] = useState('')
  
  const menuRef = useRef(null)
  const dispatch  =useAppDispatch();
  const Navigate = useNavigate()

  useEffect(()=>{
    // if user Exists Load ther
    if(user.name){
      dispatch(loadCart(user._id))   
    }
 },[])

  useCustomRef(menuRef,()=>{
      setShow(false);
  })

  const handleLogout = ()=>{
       dispatch(logout());
       dispatch(emptyCart())
       setShow(false)
  }
  const handleClick = ()=>{
      Navigate(`/search/${searchParam}`,{replace:true})
      setSearchParam('')
  }


  const MenuBar = <Menu ref={menuRef}>
     <Link to={'order'}>Orders</Link>
     <button onClick={handleLogout}>Logout</button>
  </Menu>
  return (
    <Container >

      <FirstHeaderSection>
        <Left><TitleHeader><Link to={'/'}>Tools Suppliers</Link></TitleHeader></Left>
        <Right>
          <HeaderPara>Language : EN</HeaderPara>
          {user.name && <HeaderButton onClick={()=>setShow(!show)}>My Account <FaChevronDown /></HeaderButton>}
          {show&&MenuBar}
        </Right>
      </FirstHeaderSection>

      {/* <SecondHeaderSection>
        <HeaderText>Super Deal All Products 50% off</HeaderText>
      </SecondHeaderSection> */}

      <ThirdHeaderSection>
        <SearchContainer>
          <Search placeholder='Search' value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} />
          <SearchButton onClick={handleClick}><FaSearch/></SearchButton>
        </SearchContainer>
        <Navigation />
      </ThirdHeaderSection>
      <Notfication/>
    </Container>
  )
}

export default Header