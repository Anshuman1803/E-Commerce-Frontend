// import { createContext, useState } from "react";

import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../Slice/ReduxCartSlice";
const ReduxStore = configureStore({
    reducer :{
       cart : CartSliceReducer
    }
});

export default ReduxStore;