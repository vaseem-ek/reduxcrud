import { configureStore } from "@reduxjs/toolkit";
import productslice from './slices/product'

const store=configureStore({
    reducer:{
        productReducer:productslice
    }
})
export default store