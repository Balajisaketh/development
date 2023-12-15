
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    filterdata:[],
    alertdata:true,
    checksidebar:false,
    allproductsdata:[],
    orders:[],
  }

  const ProductSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    filterreducer:(state,action) => {
      state.filterdata.push(action.payload);
    },
    alertreducer:(state,action) => {
   state.alertdata=action.payload;
    },
    allprods:(state,action)=>{
      console.log("i am n store",action.payload)
      state.allproductsdata.push(action.payload)
      console.log("i am cheking ruko",state.allproductsdata);
    },
    sidebarreducer:(state,action)=>{
      state.checksidebar=action.payload;
      console.log(state.checksidebar);
    },
    ordersslice:(state,action)=>{
      console.log("i am checking data",action.payload,state.orders);
      
        state.orders=action.payload
      
      console.log(state.orders,"i m action here");

    },
    removeOrder: (state, action) => {
      // Remove the order from the state based on the uid
      state.orders = state.orders.filter(order => order.uid !== action.payload);
    },
    },
  })

  // Action creators are generated for each case reducer function
  export const { filterreducer,allprods,alertreducer,sidebarreducer,checksidebar,removeOrder,allproductsdata,ordersslice} = ProductSlice.actions

  export default ProductSlice.reducer