import React from 'react'
import { Link } from 'react-router-dom'
import { Li, Nav, Ul,Button } from './style'
import {FaShoppingCart} from 'react-icons/fa'

const Navigation = () => {
  return (
    <Nav>
        <Ul>
            <Li>
                <Link to='/register'> Register </Link>
            </Li>

            <Li>
                <Link to='/login'> Login</Link>
            </Li>
            <Li>
                <Button>
                     <FaShoppingCart color='#fff' size={'18px'}/> 
                </Button>
            </Li>
        </Ul>
    </Nav>
  )
}

export default Navigation