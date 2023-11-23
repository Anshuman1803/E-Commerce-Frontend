import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity } from '../Slice/ReduxCartSlice';

function ProductCart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (id) => {
    dispatch(increaseQuantity({ "id": id }))
  }

  const handleDecrementQuantity = (id) => {
    dispatch(decreaseQuantity({ "id": id }))
  }

  return (
    < >
      {
        cartItems.length <= 0 ? <p className='emptyCartMessage'>Cart is Empty</p> :
          <div className='cartItems--Container'>
            <div className='cartItemBox'>
              {cartItems.map((items) => {
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
                      <button className='removeFromCartButton'>Remove</button>
                    </div>

                  </div>
                  <hr className='hrLine' />
                </React.Fragment>
              })}
            </div>

            <div className='cartItem-PriceBox'>
              <h3 className='PriceBox--heading'>Price Details</h3>
              <p className="PriceBox-Items">SubTotal <span className="PriceBox-Items-Label">₹ 10</span></p>
              <p className="PriceBox-Items">Shipping Fee <span className="PriceBox-Items-Label">₹ 0</span></p>
              <p className="PriceBox-Items">Tax <span className="PriceBox-Items-Label">₹ 0</span></p>
              <p className="PriceBox-Items">Total Ammount <span className="PriceBox-Items-Label">₹ 10</span></p>
              <button className='checkOutButton'>Check Out</button>
            </div>
          </div>
      }
    </>
  )
}

export default ProductCart
