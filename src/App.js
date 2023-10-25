import React, { useEffect, useState } from "react";
import NavBar from "./componant/NavBar";
import Container from "react-bootstrap/Container";
import axios from "axios";
import CardsList from "./componant/CardsList";
function App() {
  const [movies, setMovies] = useState([]);
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US"
    );
    setMovies(res.data.results);
  };
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
  };
  const search = async (word) => {
    if(word===''){
      getAllMovies()
    }else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bdbac4a2c5e26c8829044e1d929a11ac&query=${word}&language=en-US`
    );
    setMovies(res.data.results);
  }}


  useEffect(() => {
    getAllMovies();
  }, []);
  console.log(movies)
  return (
    <div className="App">
      <NavBar search={search} />
      <Container >

        <CardsList getPage={getPage} movies={movies} />

      </Container>
     
    </div>
  );
}

export default App;
