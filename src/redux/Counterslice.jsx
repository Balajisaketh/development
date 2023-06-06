
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  logdata:[]
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  loginreducer:(state,action) => {
    
    state.logdata.push(action.payload);
  }
  },
})

// Action creators are generated for each case reducer function
export const { loginreducer } = counterSlice.actions

export default counterSlice.reducer