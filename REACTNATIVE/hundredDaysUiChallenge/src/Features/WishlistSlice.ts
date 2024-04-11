import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemPresent = state.wishlist.find(
        (item: any) => item.id === action.payload.id,
      );
      if (itemPresent) {
        const removeItem = state.wishlist.filter(
          (item: any) => item.id !== action.payload.id,
        );
        state.wishlist = removeItem;
      } else {
        state.wishlist.push(action.payload);
      }
    },
    clearWishlist: state => {
      state.wishlist = [];
    },
  },
});

export default wishlistSlice.reducer;
export const {addToWishlist, clearWishlist} = wishlistSlice.actions;
