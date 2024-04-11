import {configureStore} from '@reduxjs/toolkit';
import CartSlice from '../Features/CartSlice';
import WishlistSlice from '../Features/WishlistSlice';

const store = configureStore({
  reducer: {
    cart: CartSlice,
    wishlist: WishlistSlice,
  },
});

export default store;
