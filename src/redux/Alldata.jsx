
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    filterdata:[],

    
  }

  const ProductSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    filterreducer:(state,action) => {
      
      state.filterdata.push(action.payload);
    },
    
    },
  })

  // Action creators are generated for each case reducer function
  export const { filterreducer} = ProductSlice.actions

  export default ProductSlice.reducer