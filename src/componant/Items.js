import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Items = ({mov}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-3" >
      <Link to={`/movie/${mov.id}`}>
      <div className="card-style">
        <img className="img-card-style" src={`https://image.tmdb.org/t/p/w500/`+mov.poster_path} alt="poster" />
        
        <div className="overlay-card-style">

          <div className="text_overlay">
          <p >Movie's Name : <span style={{color:'gold'}}>{mov.title}</span>  </p>
              <p>Release_date: {mov.release_date} </p>
              <p>Vote Count: {mov.vote_count} </p>
              <p>Rateing: <span style={{color:'gold'}}>{mov.vote_average}⭐</span> </p>
          </div>

        </div>
      </div>
      </Link>
    </Col>
  );
};

export default Items;
