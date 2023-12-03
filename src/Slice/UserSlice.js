import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "UserInformation": [],
    "CurrentUser": {
        "User": localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [],
    },
    "isLoggedIn": localStorage.getItem("user") ? true : false

}
const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        addUser(state, action) {
            state.UserInformation.push(action.payload);
            const CurrentUser = state.UserInformation.filter((user) => user.userEmail === action.payload.userEmail);
            state.isLoggedIn = true
            state.CurrentUser.User = CurrentUser;
            localStorage.setItem("user", JSON.stringify(state.CurrentUser.User));
        },
        userLogOut(state, action) {
            state.isLoggedIn = action.payload;
            state.CurrentUser.User = [];
            localStorage.removeItem("user")
        }
    }
});

export const { addUser, userLogOut, addToUserCart, increaseQuantity, decreaseQuantity, removeProduct } = UserSlice.actions
export default UserSlice.reducer