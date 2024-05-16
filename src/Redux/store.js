import {configureStore} from "@reduxjs/toolkit"
import wishListSlice from "./slice/wishListSlice"
import cartSlice from "./slice/cartSlice"


const store = configureStore({
    reducer:{
        wishListReducer:wishListSlice,
        cartReducer:cartSlice
    }

    
})

export default store