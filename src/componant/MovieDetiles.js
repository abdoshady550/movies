import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const MoviID = useParams();

  const getMovieDetails = useCallback(async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${MoviID.id}?api_key=bdbac4a2c5e26c8829044e1d929a11ac&language=en-US`
    );
    setMovie(res.data);
  }, [MoviID.id]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return (
    <div className="justify-content-center">
       
      <Row className="my-5   content-detils-style ">
        
        <Col className="justify-content-center my-5" md={3}>
          <img
            className="img-details-style"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
          />
        
           <div className="d-flex justify-content-center">
            <a target='_blank' href={movie.homepage}>
          <button   className="btn-style">Watch now</button>
          </a>
        </div>
        </Col>
        <Col className="my-4 text-detailes" md={6}>
          <div className="d-flex about justify-content-center">
            <p style={{ fontWeight: "bold" }}>Movie's Name </p>
            <span style={{ color: "gold",fontWeight: "bold" }}>{movie.title}</span>
            <hr className="under-line" />
            <p style={{ fontWeight: "bold" }}>Release Date</p>
            <span style={{ color: "gold",fontWeight: "bold" }}>{movie.release_date}</span>
            <hr className="under-line" />
            <p style={{ fontWeight: "bold" }}>Vote Count</p>
            <span style={{ color: "gold",fontWeight: "bold" }}> {movie.vote_count}</span>
            <hr className="under-line" />
            <p style={{ fontWeight: "bold" }}>
              Rating:{" "}
              <span style={{ color: "gold",fontWeight: "bold" }}>{movie.vote_average}⭐</span>
            </p>
          </div>
         
         
        </Col>
    
      </Row>

      <Row className="my-5 px-5 p-4 content-detils-style2 ">
        <div>
          <p
            style={{justifyContent:'center',display:'flex',
              backgroundColor: "#00030492",
              width: "150px",
              padding: "5px",
              color: "gold",
              fontSize: "30px",
              fontWeight: "bold",
             
              borderRadius:'15px',
            }}
          >
            Story
          </p>
          <p style={{ fontSize:'20px'}}>{movie.overview}</p>
        </div>
      </Row>
    </div>
  );
};

export default MovieDetails;
