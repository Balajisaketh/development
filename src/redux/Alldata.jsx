
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    filterdata:[],
    alertdata:true,
    checksidebar:false,
    allproductsdata:[],
    
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
    }
    },
  })

  // Action creators are generated for each case reducer function
  export const { filterreducer,allprods,alertreducer,sidebarreducer,checksidebar,allproductsdata} = ProductSlice.actions

  export default ProductSlice.reducer