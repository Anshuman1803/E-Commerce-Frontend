
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { checkoutProcess } from '../Slice/ReduxCartSlice';
import { useNavigate } from "react-router-dom";
function PaymentButtons() {
    const navigateTo = useNavigate();
    const { userID, cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const createOrder = (data) => {
        return fetch("https://ecom-backend-t7c9.onrender.com/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart: cartItems, userID: userID, cartTotalQuantity: cartTotalQuantity, cartTotalAmount: cartTotalAmount
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    const onApprove = (data) => {
        return fetch("https://ecom-backend-t7c9.onrender.com/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => {
                dispatch(checkoutProcess());
                navigateTo("/success");
                return response.json()
            });
    };
    return (
        <PayPalButtons className="paypalButtons"
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    );
}
export default PaymentButtons