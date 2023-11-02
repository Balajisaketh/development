
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    filterdata:[],
    alertdata:true,
    checksidebar:false
    
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
    sidebarreducer:(state,action)=>{
      state.checksidebar=action.payload;
      console.log(state.checksidebar);
    }
    },
  })

  // Action creators are generated for each case reducer function
  export const { filterreducer,alertreducer,sidebarreducer,checksidebar} = ProductSlice.actions

  export default ProductSlice.reducer