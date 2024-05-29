import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    increment: (state, action) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent) itemPresent.quantity++;
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeItem;
    },
    clearCart: state => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {addToCart,increment, removeFromCart, clearCart} = cartSlice.actions;
