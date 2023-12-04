import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { checkoutProcess } from '../Slice/ReduxCartSlice';

import { useDispatch, useSelector } from 'react-redux';
import PaymentSuccess from './PaymentSuccess';

function PaymentPage() {
    const navigateTO = useNavigate();
    const dispatch = useDispatch()
    const [Success, setSuccess] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.User);

    const handleCancleOrder = () => {
        navigateTO("/cart");
        toast.info('Order Canceled', {
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
    const handleConfirmOrder = () => {
        dispatch(checkoutProcess());
        setSuccess(true)
        toast.info('Order Successful', {
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
                isLoggedIn ? <>
                    {
                        Success ? <PaymentSuccess /> : <div className='paymentPageContainer'>
                            <button className='PaymentButton' onClick={handleCancleOrder}>Cancle Order</button>
                            <button className='PaymentButton' onClick={handleConfirmOrder}>Confirm Order</button>
                        </div>
                    }
                </>
                    : <div style={{ height: "500px", display: 'grid', placeItems: "center" }}>
                        <button className='checkOutButton' onClick={() => navigateTO("/user/login")}>Log in</button></div>
            }
        </>
    )
}

export default PaymentPage
