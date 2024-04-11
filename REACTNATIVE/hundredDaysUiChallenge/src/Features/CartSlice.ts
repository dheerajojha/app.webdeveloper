import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ADD TO CART
    addToCart: (state: any, action: any) => {
      const itemPresent = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },

    // REMOVE FROM CART
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item: any) => item.id !== action.payload.id,
      );
      state.cart = removeItem;
    },

    // INCREAMENT QUANTITY

    incrementQuantity: (state, action) => {
      const itemPresent: any = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      itemPresent.quantity++;
    },

    // DECREMENT QUANTITY ACTION || FUNCTION
    decrementQuantity: (state, action) => {
      const itemPresent: any = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      if (itemPresent.quantity === 1) {
        itemPresent.quantity = 0;
        const removeItem = state.cart.filter(
          (item: any) => item.id !== action.payload.id,
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
    },

    // CLEAR QUANTITY ACTION || FUNCTION
    clearCart: state => {
      state.cart = [];
    },
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
