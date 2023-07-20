// src/reducers/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        if (item.quantity === 1) {
          // If the quantity is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.productId !== productId);
        } else {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
