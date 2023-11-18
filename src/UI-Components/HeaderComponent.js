import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo.png'

function HeaderComponent() {
  return (
    <header className='App--Header'>
      <img src={Logo} alt="AppLogo" className='AppLogo' />

      <Link className="cartIconContainer" title="Cart">
        <i className="fa-solid fa-cart-shopping cartIcon"></i>
        <span className='CartproductCounterLabel'>0</span>
        </Link>


      <i className="fa-solid fa-bars hamNavButton"></i>

    </header>
  )
}

export default HeaderComponent
