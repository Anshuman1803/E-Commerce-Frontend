import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "UserInformation": [],
    "CurrentUser": {
        "User": '',
        "cart": {
            cartItems: [],
            cartTotalQuantity: 0,
            cartTotalAmount: 0,
        },
    },
    "isLoggedIn": false

}
const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {

        addToUserCart(state, action) {
            const itemIndex = state.CurrentUser.cart.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.CurrentUser.cart.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.CurrentUser.cart.cartItems.push(tempProduct);
                state.CurrentUser.cart.cartTotalQuantity++;
            }

        },

        increaseQuantity(state, action) {
            const currentIndex = state.CurrentUser.cart.cartItems.findIndex((item) => item.id === action.payload.id);
            state.CurrentUser.cart.cartItems[currentIndex].cartQuantity += 1
        },

        decreaseQuantity(state, action) {
            const currentIndex = state.CurrentUser.cart.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.CurrentUser.cart.cartItems[currentIndex].cartQuantity > 1) {
                state.CurrentUser.cart.cartItems[currentIndex].cartQuantity -= 1
            }
        },

        removeProduct(state, action) {
            const filteredData = state.CurrentUser.cart.cartItems.filter((product) => product.id !== action.payload);
            state.CurrentUser.cart.cartTotalQuantity--;
            state.CurrentUser.cart.cartItems = filteredData;
        },

        addUser(state, action) {
            state.UserInformation.push(action.payload);
            const CurrentUser = state.UserInformation.filter((user) => user.userEmail === action.payload.userEmail);
            state.isLoggedIn = true
            state.CurrentUser.User = CurrentUser;
        },

        userLogOut(state, action) {
            state.isLoggedIn = action.payload
            state.CurrentUser.User = ""
        }
    }
});

export const { addUser, userLogOut, addToUserCart, increaseQuantity, decreaseQuantity, removeProduct } = UserSlice.actions
export default UserSlice.reducer