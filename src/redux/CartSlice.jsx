// src/reducers/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    quantitydata:1,
    

  },
  reducers: {
    addToCart: (state, action) => {
      
console.log(action.payload,"i m action");
      const { uid, quantity } = action.payload;
      console.log(uid, quantity,"here in redux!");
      const productIndex = state.items.findIndex((product) => product.uid == uid);
      if (productIndex !== -1) {
        console.log(productIndex,"inside")  
        state.items[productIndex].quantity+=1
        
      
      }
      else{
        state.items.push({ ...action.payload, quantity: 1 });
        
        
      }

    },

    increaseQuantity: (state, action) => {
      
        console.log('incQuantity',action.payload)
        const { productId, quantity } = action.payload;
     const productIndex = state.items.findIndex((product) => product.uid == productId);
     console.log(state.items,productIndex,productId,"i m indexed quantity")
     if (productIndex !== -1) {
      console.log(productIndex,"inside")  
      state.items[productIndex].quantity = quantity;
      
    }
     
    },
    decreaseQuantity: (state, action) => {
      console.log('decreaseQuantity',action.payload)
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.uid == productId);
      if (item) {
        if (item.quantity === 1) {
          // If the quantity is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.productId !== productId);
        } else {
          
          const productIndex = state.items.findIndex((product) => product.uid === productId);
      if (productIndex !== -1) {
        state.items[productIndex].quantity = quantity;
        
      }
     
        
        }
      }
    },
    resetcart:(state,action)=>{
      state.items = action.payload
      state.quantitydata=0
       
    },
    
    
  
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity,resetcart } = cartSlice.actions;

export default cartSlice.reducer;
