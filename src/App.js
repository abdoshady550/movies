import React, { useEffect, useState } from "react";
import axios from "axios";
import CardsList from "./componant/CardsList";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import NavBar from "./componant/NavBar";
import Container from "react-bootstrap/Container";
import MovieDetiles from "./componant/MovieDetiles";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // getAll pages 
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)
  };
  // get number of page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
  };
  // search in movies
  const search = async (word) => {
    if(word===''){
      getAllMovies()
    }else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bdbac4a2c5e26c8829044e1d929a11ac&query=${word}&language=en-US`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)
  }}


  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    
    <div className="App">
      <NavBar search={search} />
      <Container >
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<CardsList getPage={getPage} pageCount={pageCount} movies={movies} />}/>
        <Route path="/movie/:id" element={<MovieDetiles/>}/>
        </Routes>
         </BrowserRouter>
      </Container>
     
    </div>
  );
}

export default App;
