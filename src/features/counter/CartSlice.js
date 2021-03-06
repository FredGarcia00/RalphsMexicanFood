import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    cart: [],
    },
    reducers: {
      AddtoCart: ( state, action ) => {
        //logic to add item to basket
        state.cart = [...state.cart, action.payload]
      },
      //logic to remove an item from basket
      DeleteCart: (state, action) => {
        //cloned basket
        let newCart = [...state.cart];
        //check to see if product exists
        const index = state.cart.findIndex((cartItems) => cartItems.id === action.payload.id);
        // console.log('The index is: ', index);
        if (index >=0 ) {
          //item exists in basket, remove it... 
          newCart.splice(index, 1);
          // console.log('item has been removed',newBasket);
        }
        else {
          console.warn('error occurred')
        }
        
        state.cart = newCart;
      }
    }
  });

  export const { AddtoCart, DeleteCart } = cartSlice.actions;
  
  export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount,0);
  
  export const selectCart = state => state.cart;


  export default cartSlice.reducer;