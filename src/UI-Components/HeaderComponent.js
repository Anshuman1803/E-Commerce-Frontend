import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'
import { useSelector } from 'react-redux'

function HeaderComponent() {
  const {cartTotalQuantity}= useSelector((state)=>state.cart);
  return (
    <header className='App--Header'>
      <img src={Logo} alt="AppLogo" className='AppLogo' />

      <div className="searchContainer">
        <input type="text" name='SearctProduct' id='SearchProduct' placeholder='Search Here For Product' />
        <button className='searchProductBtn'><i className="fa-solid fa-magnifying-glass searchProductBtnIcon"></i></button>
      </div>

      <div className="userContainer">
        <div className="userBox">
          <i className="fa-solid fa-user-tie userIcon"></i>
          <h2 className='UserName'>M</h2>
          <span className='itemCountLabel'>{cartTotalQuantity}</span>
        </div>
        <ul className="userDropDown">
          <Link className="dropDownItem" to="/user/register"><i className="fa-solid fa-user-tie dropDownnitemIcon"></i> <span className='itemLabel'>User Profile</span> </Link>

          <Link className="dropDownItem" to="/cart"><i className="fa-solid fa-cart-shopping dropDownnitemIcon"></i> <span className='itemLabel'>Cart</span> </Link>

          <Link className="dropDownItem" to="/wishlist"><i className="fa-solid fa-heart dropDownnitemIcon"></i> <span className='itemLabel'>Wishlist</span> </Link>
        </ul>
      </div>


      <i className="fa-solid fa-bars hamNavButton"></i>

    </header>
  )
}

export default HeaderComponent
