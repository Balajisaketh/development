
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    filterdata:[],
    alertdata:true,

    
    
    allproductsdata:[]
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
    allproductsdatareducer:(state,action)=>{
      console.log("i am payload",action.payload)
      state.allproductsdata=action.payload
    }
    },
  })

  // Action creators are generated for each case reducer function
  export const { filterreducer,alertreducer,allproductsdatareducer} = ProductSlice.actions

  export default ProductSlice.reducer