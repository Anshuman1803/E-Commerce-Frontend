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
        }
    }
});

export const { addToCart } = ReduxCartSlice.actions
export default ReduxCartSlice.reducer