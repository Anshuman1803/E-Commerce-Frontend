import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut } from '../Slice/UserSlice';

function HeaderComponent() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { CurrentUser,isLoggedIn } = useSelector((state) => state.User);
const dispatch = useDispatch();

  const handleHamButtonClick = (e) => {
    const navBar = document.querySelector(".sideNavbar");
    const hamMenuBtn = document.querySelector(".hamNavButton");
    navBar.classList.toggle("hideTabMobileNavBar");
    hamMenuBtn.classList.toggle("fa-xmark");
  }
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
          <h2 className='UserName'>{CurrentUser ? CurrentUser[0]?.userName?.slice(0, 1) : "U"}</h2>
          <span className='itemCountLabel'>{cartTotalQuantity}</span>
        </div>
        <ul className="userDropDown">


          {
            isLoggedIn ?
              <>
                <Link className="dropDownItem" to="/user/register"><i className="fa-solid fa-user-tie dropDownnitemIcon"></i> <span className='itemLabel'>{CurrentUser ? CurrentUser[0].userName : "User Profile"}</span> </Link>
               
                <Link className="dropDownItem" to="/cart"><i className="fa-solid fa-cart-shopping dropDownnitemIcon"></i> <span className='itemLabel'>Cart</span> </Link>

                <li className="dropDownItem"onClick={()=> dispatch(userLogOut(false))} ><i className="fa-solid fa-right-from-bracket dropDownnitemIcon"></i> <span className='itemLabel'>Log Out</span> </li>
              </>
              :
              <>
                <Link className="dropDownItem" to="/user/register"><i className="fa-solid fa-user-plus dropDownnitemIcon"></i><span className='itemLabel'>Register</span></Link>
                <Link className="dropDownItem" to="/user/login"><i className="fa-solid fa-right-to-bracket dropDownnitemIcon"></i><span className='itemLabel'>Log In</span></Link>
              </>
          }
        </ul>
      </div>


      <i className="fa-solid fa-bars hamNavButton" onClick={handleHamButtonClick}></i>

    </header>
  )
}

export default HeaderComponent
