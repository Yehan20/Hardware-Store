import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../slices/productSlice';
import authSlice from '../slices/authSlice';
import cartSlice from '../slices/cartSlice';

const Store = configureStore({
    reducer:{
        Products:productSlice,
        Auth:authSlice,
        Cart:cartSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export default Store;