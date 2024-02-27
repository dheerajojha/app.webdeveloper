import {createSlice} from '@reduxjs/toolkit';

type initialStateType = {
  product: [];
  loading: boolean;
  error: boolean;
  success: boolean;
  message: string;
};
const initialState: initialStateType = {
  product: [],
  loading: false,
  error: false,
  success: false,
  message: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.product.push(action.payload);
    },
  },
});
export const {addProduct} = productSlice.actions;
export default productSlice.reducer;
