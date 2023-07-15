import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/Counterslice'
import  registerreducer from './RegSlice';
import Productdata  from './Alldata';


export const store = configureStore({
  reducer: {
    loginreducer:counterReducer,
    regreducer:registerreducer,
    prods:Productdata,


  }
})