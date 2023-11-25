import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
function MobileNavBar() {
    const {cartTotalQuantity}= useSelector((state)=>state.cart);
    const handleSideNavItemClick = (e)=>{
        const navBar = document.querySelector(".sideNavbar");
        const hamMenuBtn = document.querySelector(".hamNavButton");
        navBar.classList.add("hideTabMobileNavBar");
        hamMenuBtn.classList.remove("fa-xmark");
    }
  return (

      <aside className='sideNavbar hideTabMobileNavBar'>
          <div className="sideNavbar--userContainer">
            <Link onClick={handleSideNavItemClick} className="sideNavbar--cartItemBox" to="/cart"><i className="fa-solid fa-cart-shopping "></i> <span className='sideNavbar--ItmeCount'>{cartTotalQuantity}</span></Link>
            {/* <Link className="sideNavbar--cartItemBox" to="/wishlist"><i className="fa-solid fa-heart"></i> <span className='sideNavbar--ItmeCount'>{cartTotalQuantity}</span></Link> */}
       
      </div>
         <NavLink onClick={handleSideNavItemClick} className='navItem' to={'/'}> Home</NavLink>
        <NavLink onClick={handleSideNavItemClick} className='navItem'  to={`products/mobile`}> Mobile</NavLink>
        <NavLink onClick={handleSideNavItemClick} className='navItem'  to={`products/laptop`}> Laptop</NavLink>
        <NavLink onClick={handleSideNavItemClick} className='navItem' to={`products/camera`}> Camera</NavLink>
        <NavLink onClick={handleSideNavItemClick} className='navItem' to={`products/headphone`}> Headphone</NavLink>
        <button className='logOutButton'>Log Out</button>
      </aside>
  )
}

export default MobileNavBar
