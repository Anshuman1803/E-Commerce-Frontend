import React from 'react'
import { useSelector } from 'react-redux'

function ProductCart() {
  const {cartItems} = useSelector((state)=> state.cart);
  return (
    < >
      {
        // cartItems.length >0 ? <p className='emptyCartMessage'>Cart is Empty</p> : 
        <div className='cartItems--Container'>
          <div className='cartItemBox'></div>
          <div className='cartItem-PriceBox'>
            <h3 className='PriceBox--heading'>Price Details</h3>
            <p className="PriceBox-Items">Price <span className="PriceBox-Items-Label">₹ 10</span></p>
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
