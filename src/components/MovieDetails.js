import React from "react";
import { useSelector } from "react-redux";//click on  specific movie data
//fargmentreact<>
const MovieDetails = () => {
  const movie = useSelector(
    (state) => state.selectedMovie
  );
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${movie.backgroundImageURL})` }}
      >
        
          <img src={movie.url} alt="movie-poster" />
          <div className="movie-details">
            <h2 className="movie-heading">{movie.title}</h2>
           </div>
          <div className="clear"></div>
        
      </div>
      <div className="content-details">
        <div className="container">
          <div className="description">
            <h3 className="description-headding">Summary</h3>
            <div className="description-content">{movie.about}</div>
          </div>
        </div>
      </div>
    </>
  );
};



export default MovieDetails;