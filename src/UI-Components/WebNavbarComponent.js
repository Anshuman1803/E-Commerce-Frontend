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

     
    </nav>
  )
}

export default WebNavbarComponent
