import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './Features/CartSlice';
const store = configureStore({
  reducer: {
    cart: cartSlice,
    cart31:cartSlice,
  },
});

export default store;
