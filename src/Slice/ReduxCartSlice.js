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
            const currentIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.cartItems[currentIndex].cartQuantity += 1
        },

        decreaseQuantity(state, action) {
            const currentIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[currentIndex].cartQuantity > 1) {
                state.cartItems[currentIndex].cartQuantity -= 1
            }
        },

        removeProduct(state, action) {
            const filteredData = state.cartItems.filter((product) => product.id !== action.payload);
            state.cartTotalQuantity--;
            state.cartItems = filteredData;
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } = ReduxCartSlice.actions
export default ReduxCartSlice.reducer