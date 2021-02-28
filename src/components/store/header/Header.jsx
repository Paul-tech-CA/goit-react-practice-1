import React from 'react'
import logo from '../../../images/ebay.png'
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderContainer>
            <img className='logo' src={logo} alt="Logo"/>
            <nav>
                <a className="navLink" href="#">Home</a>
                <a className="navLink" href="#">About</a>
                <a className="navLink" href="#">Products</a>
                <a className="navLink" href="#">Card</a>
            </nav>
        </HeaderContainer>
    )
}

export default Header
