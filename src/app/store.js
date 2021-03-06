import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/counter/CartSlice';



export default configureStore ({
    reducer: {
        cart: cartReducer
    },
});