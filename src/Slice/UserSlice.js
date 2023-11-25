import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "UserInformation": [],
    "CurrentUser": "",
    "isLoggedIn": false
}
const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        addUser(state, action) {
            state.UserInformation.push(action.payload);
            const CurrentUser = state.UserInformation.filter((user) => user.userEmail === action.payload.userEmail);
            state.isLoggedIn = true
            state.CurrentUser = CurrentUser;
        },

        userLogOut(state, action) {
            state.isLoggedIn = action.payload
            state.CurrentUser = ""
        }
    }
});

export const { addUser, userLogOut } = UserSlice.actions
export default UserSlice.reducer