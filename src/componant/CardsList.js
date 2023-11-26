import React from "react";
import Items from "./Items";
import { Row } from "react-bootstrap";
import Pagination from "./Pagination";
import { Spinner } from "react-spinner-animated";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AllMovie } from "./../redux/action/MoviesActions";
const CardsList = () => {
  const [movies, setMovies] = useState([]);
  const allDataMovies = useSelector((state) => state.Movies.moviesInfo);

  const dispatcher = useDispatch();

  useEffect(() => {
    if (allDataMovies.length > 0) {
      setMovies(allDataMovies);
    }
  }, [allDataMovies]);

  useEffect(() => {
    dispatcher(AllMovie());
  }, [dispatcher]);
  return (
    <Row className="my-4 px-5 p-4 content-style">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <Items key={mov.id} mov={mov} />;
        })
      ) : (
        <Spinner center={true} width={"100px"} height={"300px"} />
      )}
      {movies.length >= 1 ? <Pagination /> : null}
    </Row>
  );
};

export default CardsList;
