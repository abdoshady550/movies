import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//all data
export const AllMovie = createAsyncThunk("movies/getAll", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US"
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
});
//total pages
export const AllPages = createAsyncThunk("movies/getTotalOfPages", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US"
    );
    return res.data.total_pages;
  } catch (error) {
    console.error("Error fetching pages:", error);
    throw error;
  }
});
//get page of pagination
export const getPage = createAsyncThunk("movies/getNumPages", async (page) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US&page=${page}`
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching page:", error);
    throw error;
  }
});
//search by name
export const search = createAsyncThunk("movies/search", async (word) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=bdbac4a2c5e26c8829044e1d929a11ac&query=${word}&language=en-US`
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching page:", error);
    throw error;
  }
});
//search pages
export const searchPages = createAsyncThunk(
  "movies/searchPages",
  async (word) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=bdbac4a2c5e26c8829044e1d929a11ac&query=${word}&language=en-US`
      );
      return res.data.total_pages;
    } catch (error) {
      console.error("Error fetching page:", error);
      throw error;
    }
  }
);
