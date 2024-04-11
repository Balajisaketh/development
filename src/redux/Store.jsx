import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/Counterslice'
import  registerreducer from './RegSlice';
import Productdata  from './Alldata';
import  cartReducer from './CartSlice'
import frontloadreducer from './FrontloadSlice'
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  // Your reducers
  loginreducer:counterReducer,
  regreducer:registerreducer,
  prods:Productdata,
  cart: cartReducer,
  frontload:frontloadreducer,

  });
  const persistConfig = {
    key: 'root', // The key to use for storing the data in storage
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, reducers);  
  export const store = createStore(persistedReducer);
  export const persistor = persistStore(store);
  // hh