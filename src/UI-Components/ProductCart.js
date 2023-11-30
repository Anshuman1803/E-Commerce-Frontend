import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeProduct } from '../Slice/ReduxCartSlice';
import { ToastContainer, toast } from 'react-toastify';


function ProductCart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let totalCartPrice = 0;
  let totalProducts = 0;


  const handleIncrementQuantity = (id) => {
    dispatch(increaseQuantity({ "id": id }))
  }

  const handleDecrementQuantity = (id) => {
    dispatch(decreaseQuantity({ "id": id }))
  }
  const handleRemoveItemClick = (id) => {
    dispatch(removeProduct(id));
    toast.success('Item Deleted Successfully', {
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
    < >
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
        // cartItems.length <= 0 ? <p className='emptyCartMessage'>Cart is Empty</p> :
        <div className='cartItems--Container'>
          {
            cartItems.length <= 0 ? <p className='emptyCartMessage'>Cart is Empty</p> : <>

              <div className='cartItemBox'>
                {cartItems.map((items) => {
                  totalCartPrice += items.Dprice * items.cartQuantity;
                  totalProducts += items.cartQuantity;
                  return <React.Fragment key={items.id}>
                    <div className="itemBox">

                      <div className="itemPictureContainer">
                        <img src={items.images[0]} alt="productImage" className='itemPicture' />
                      </div>

                      <div className="itemDetailsContainer">

                        <p className="itemBox--itemPrice">₹ {items.Dprice}</p>

                        <div className="ItemquantityContainer">
                          <button className='quantityButton' onClick={() => handleDecrementQuantity(items.id)}>-</button>
                          <span className='itemQuantity'>{items.cartQuantity}</span>
                          <button className='quantityButton' onClick={() => handleIncrementQuantity(items.id)}>+</button>
                        </div>

                        <p className="itemToalPrice">Item Price <span className='ToalPrice'>₹{items.Dprice * items.cartQuantity}</span></p>
                        <button className='removeFromCartButton' onClick={() => handleRemoveItemClick(items.id)}>Remove</button>
                      </div>

                    </div>
                    <hr className='hrLine' />
                  </React.Fragment>
                })}
              </div>

              <div className='cartItem-PriceBox'>
                <h3 className='PriceBox--heading'>Price Details</h3>
                <p className="PriceBox-Items">Total Items <span className="PriceBox-Items-Label">{totalProducts}</span></p>
                <p className="PriceBox-Items">SubTotal <span className="PriceBox-Items-Label">₹ {totalCartPrice}</span></p>
                <p className="PriceBox-Items">Shipping Fee <span className="PriceBox-Items-Label">₹ 0</span></p>
                <p className="PriceBox-Items">Tax <span className="PriceBox-Items-Label">₹ 0</span></p>
                <p className="PriceBox-Items">Total Ammount <span className="PriceBox-Items-Label">₹ {totalCartPrice}</span></p>
                <button className='checkOutButton'>Check Out</button>
              </div>
            </>
          }

        </div>
      }
    </>
  )
}

export default ProductCart
