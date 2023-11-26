import { createSlice } from "@reduxjs/toolkit";
import {
  AllMovie,
  AllPages,
  getPage,
  search,
  searchPages,
} from "./../action/MoviesActions";

const initialState = { moviesInfo: [], pages: 0 };

const moviesSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {},
  extraReducers: {
    //all data
    [AllMovie.pending]: (state, action) => {
      console.log(action);
    },
    [AllMovie.fulfilled]: (state, action) => {
      state.moviesInfo = action.payload;
    },
    [AllMovie.rejected]: (state, action) => {
      console.log(action);
    },
    //total pages
    [AllPages.fulfilled]: (state, action) => {
      state.pages = action.payload;
    },
    //get page of pagination
    [getPage.fulfilled]: (state, action) => {
      state.moviesInfo = action.payload;
    },
    //search
    [search.fulfilled]: (state, action) => {
      state.moviesInfo = action.payload;
    },
    //search pages
    [searchPages.fulfilled]: (state, action) => {
      state.pages = action.payload;
    },
  },
});
export default moviesSlice.reducer;
