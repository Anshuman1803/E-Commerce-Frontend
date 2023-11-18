import React from 'react'
import { NavLink } from 'react-router-dom'

function WebNavbarComponent() {
  return (
    <nav className='webNavbar'>
      <div className="navLinksContainer">
        <NavLink className='navItem' to={'/'}> Home</NavLink>
        <NavLink className='navItem'  to={`products/mobile`}> Mobile</NavLink>
        <NavLink className='navItem'  to={`products/laptop`}> Laptop</NavLink>
        <NavLink className='navItem' to={`products/camera`}> Camera</NavLink>
        <NavLink className='navItem' to={`products/headphone`}> Headphone</NavLink>
      </div>

      <div className="searchContainer">
        <input type="text" name='SearctProduct' id='SearchProduct'  placeholder='Search Here For Product' />
        <button className='searchProductBtn'><i className="fa-solid fa-magnifying-glass searchProductBtnIcon"></i></button>
      </div>
    </nav>
  )
}

export default WebNavbarComponent
