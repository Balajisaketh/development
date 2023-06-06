import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/Counterslice'
import  registerreducer from './RegSlice';

export const store = configureStore({
  reducer: {
    loginreducer:counterReducer,
    regreducer:registerreducer,
  }
})