import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const existingItem = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: any) => {
      const remove = state.cart.filter((item: any) => item.id !== action.payload.id);
      state.cart = remove;
    },

    incrementQuantity: (state: any, action: any) => {
   
      const existingItem = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },

    decrementQuantity: (state: any, action: any) => {
      const existingItem = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      if (existingItem.quantity === 1) {
        existingItem.quantity = 0;
        const removeItem = state.cart.filter(
          (item: any) => item.id !== action.payload.id,
        );
        state.cart = removeItem;
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
