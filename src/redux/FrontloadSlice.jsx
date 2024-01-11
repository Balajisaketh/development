
import { createSlice } from '@reduxjs/toolkit'

const initialState = {


  frontliquid :[],
  toploadata:[],
  stoves:[],
  washingpowders:[]
  
}

const FrontLoadSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  
  frontloadreducer:(state,action) => {
    console.log(action.payload,"in action loaded");
    
      console.log('inside frontload',state.frontliquid)
      state.frontliquid.push(action.payload);
  
  },
  toploadreducer:(state,action) => {
    state.toploadata.push(action.payload);
  },
  washingpowderreducer:(state,action)=>{
state.washingpowders.push(action.payload)
  }
  },
})

// Action creators are generated for each case reducer function
export const { frontloadreducer,toploadata } = FrontLoadSlice.actions

export default FrontLoadSlice.reducer