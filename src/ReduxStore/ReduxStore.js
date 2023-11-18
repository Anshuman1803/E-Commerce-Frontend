// import { createContext, useState } from "react";

import { configureStore } from "@reduxjs/toolkit";
import ReduxStoreSlice from "../Slice/ReduxSlice";
const ReduxStore = configureStore({
    reducer :{
        store : ReduxStoreSlice.reducer
    }
});

export default ReduxStore;