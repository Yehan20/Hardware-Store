import React from 'react'
import { Link } from 'react-router-dom'
import { Li, Nav, Ul,Button } from './style'
import {FaShoppingCart} from 'react-icons/fa'
import { useAppSelector } from '../../hooks/redux_selectors'

const Navigation = () => {
  const user = useAppSelector(state=>state.Auth.user)
  return (
    <Nav>
        <Ul>
            {user && <Li>Hello {user.name}</Li>}
            {!user && <>
                <Li>
                    <Link to='/register'> Register </Link>
                </Li>

                <Li>
                    <Link to='/login'> Login</Link>
                </Li>
            </>}
            <Li>
                <Button to='/cart'>
                     <FaShoppingCart color='#fff' size={'18px'}/> 
                </Button>
            </Li>
        </Ul>
    </Nav>
  )
}

export default Navigation