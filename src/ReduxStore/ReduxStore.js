// import { createContext, useState } from "react";

import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../Slice/ReduxCartSlice";
import UserSliceReducer from "../Slice/UserSlice";
const ReduxStore = configureStore({
    reducer :{
       cart : CartSliceReducer,
       User : UserSliceReducer
    }
});

export default ReduxStore;