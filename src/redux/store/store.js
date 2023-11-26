import { configureStore } from "@reduxjs/toolkit";
import moviesReducer  from "../reducer/reducer";
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer:{ Movies:moviesReducer,
  middleware: [thunk],
  devTools: true,
  }

});
