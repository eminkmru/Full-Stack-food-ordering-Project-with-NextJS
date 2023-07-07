import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload); // add the product to the array
      state.quantity += 1; // increment the quantity
      state.total += action.payload.price; // add the price to the total
    },
    reset: (state, action) => {
      state.products = [];
      state.quantity = 0; // increment the quantity
      state.total = 0; // add the price to the total
    },
  },
});

export const { addProduct, reset } = cartSlice.actions; // export the action
export default cartSlice.reducer; // export the reducer