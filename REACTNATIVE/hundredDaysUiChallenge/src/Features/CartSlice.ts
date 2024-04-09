import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const itemPresent = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {},
    incrementQuantity: (state, action) => {},
    decrementQuantity: (state, action) => {},
    clearCart: () => {},
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
