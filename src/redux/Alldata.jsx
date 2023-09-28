
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    filterdata:[],
    alertdata:true
    
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
    },
  })

  // Action creators are generated for each case reducer function
  export const { filterreducer,alertreducer} = ProductSlice.actions

  export default ProductSlice.reducer