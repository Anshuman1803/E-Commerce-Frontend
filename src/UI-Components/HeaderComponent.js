import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut } from '../Slice/UserSlice';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function HeaderComponent() {
  const [IsSearchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState("")
  const [searctProduct, setSearctProduct] = useState([])
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { CurrentUser, isLoggedIn } = useSelector((state) => state.User);
  const dispatch = useDispatch();


  const handleOnSearchInput = (e) => {
    setSearch(e.target.value);
  }

  const handleSearchButtonClick = (e) => {
    if (search === "") {
      toast.error("Search Box Can't Be Empty", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setSearchVisible(true);
      axios(`http://localhost:5000/search/${search}`).then((response) => {
        setSearctProduct(response.data)
      });
    }

  }

  const handleHamButtonClick = (e) => {
    const navBar = document.querySelector(".sideNavbar");
    const hamMenuBtn = document.querySelector(".hamNavButton");
    navBar.classList.toggle("hideTabMobileNavBar");
    hamMenuBtn.classList.toggle("fa-xmark");
  }

  const handleLogOut = () => {
    dispatch(userLogOut(false));
    toast.info('Sign Out!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <header className='App--Header'>
        <img src={Logo} alt="AppLogo" className='AppLogo' />

        <div className="searchContainer">
          <input type="text" name='SearctProduct' id='SearchProduct' placeholder='Search Product By Brand Name' onChange={handleOnSearchInput} />
          <button className='searchProductBtn' onClick={handleSearchButtonClick}><i className="fa-solid fa-magnifying-glass searchProductBtnIcon"></i></button>
        </div>

        <div className="userContainer">
          <div className="userBox">
            <i className="fa-solid fa-user-tie userIcon"></i>
            <h2 className='UserName'>{CurrentUser?.User[0] ? CurrentUser.User[0].userName.slice(0, 1) : "U"}</h2>
            <span className='itemCountLabel'>{isLoggedIn ? cartTotalQuantity : 0}</span>
          </div>
          <ul className="userDropDown">


            {
              isLoggedIn ?
                <>

                  <Link className="dropDownItem" to="/cart"><i className="fa-solid fa-cart-shopping dropDownnitemIcon"></i> <span className='itemLabel'>Cart</span> </Link>

                  <li className="dropDownItem" onClick={handleLogOut} ><i className="fa-solid fa-right-from-bracket dropDownnitemIcon"></i> <span className='itemLabel'>Log Out</span> </li>
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

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {
        IsSearchVisible && <div className="serachResultContainer">
          {
            searctProduct.length > 0 ? <>
              {
                searctProduct.map((products) => {
                  return <div className='searchResultBox' key={products.id}>
                    <img src={products.images[0]} alt="productImage" className={`SearchProductImage`} />
                    <p className="SearchedProdcut--price">
                      <span className="Dprice">₹{products.Dprice}</span>
                      <span className="DiscountPercentage">{products.discountPercentage}%off</span>
                    </p>
                    <p className="searchedProductRating">{products.rating}<i className="fa-solid fa-star"></i></p>
                    <Link to={`/product/${products.title.slice(0, 18)}-${products.id}`} className='searchProductViewLink' onClick={() => setSearchVisible(false)}>Details </Link>
                  </div>
                })
              }

            </> : <p className='outOfStockMessage'> Product not Found</p>
          }

        </div>
      }
    </>
  )
}

export default HeaderComponent
