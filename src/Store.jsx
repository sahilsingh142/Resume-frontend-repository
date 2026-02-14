import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./handleSlice.jsx" 

export const store = configureStore({
    reducer:{
        resume: storeSlice,
    },
});