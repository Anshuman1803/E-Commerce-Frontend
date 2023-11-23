import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const ReduxCartSlice = createSlice({
    name: 'Ms Cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                state.cartTotalQuantity++;
            }
        },

        increaseQuantity(state, action) {
            const currentIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);
            state.cartItems[currentIndex].cartQuantity += 1
        },
        
        decreaseQuantity(state, action) {
            const currentIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);
            state.cartItems[currentIndex].cartQuantity -= 1
        },
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity } = ReduxCartSlice.actions
export default ReduxCartSlice.reducer