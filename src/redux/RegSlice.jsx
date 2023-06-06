
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  regdata:[]
}

const RegisterSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
  registerreducer:(state,action) => {
    
    state.regdata.push(action.payload);
  }
  },
})

// Action creators are generated for each case reducer function
export const { registerreducer } = RegisterSlice .actions

export default RegisterSlice.reducer