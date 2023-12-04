import React from 'react'
import { useNavigate } from 'react-router-dom'

function PaymentSuccess() {
  const navigateTo = useNavigate();
  return (
    <div className='successPageContainer'>
      <button className='PaymentButton shopMore' onClick={() => navigateTo('/products/All')}>Shop More</button>
    </div>
  )
}

export default PaymentSuccess
