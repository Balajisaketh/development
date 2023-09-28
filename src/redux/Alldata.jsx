
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    filterdata:[],
<<<<<<< Updated upstream

    
=======
    alertdata:true,
    allproductsdata:[]
>>>>>>> Stashed changes
  }

  const ProductSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    filterreducer:(state,action) => {
      
      state.filterdata.push(action.payload);
    },
<<<<<<< Updated upstream
    
=======
    alertreducer:(state,action) => {
   state.alertdata=action.payload;
    },
    allproductsdatareducer:(state,action)=>{
      console.log("i am payload",action.payload)
      state.allproductsdata=action.payload
    }
>>>>>>> Stashed changes
    },
  })

  // Action creators are generated for each case reducer function
<<<<<<< Updated upstream
  export const { filterreducer} = ProductSlice.actions
=======
  export const { filterreducer,alertreducer,allproductsdatareducer} = ProductSlice.actions
>>>>>>> Stashed changes

  export default ProductSlice.reducer