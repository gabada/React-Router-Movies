import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(props.movie)
  }

  return (
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>
      

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
        
      ))}
      </Link>
      <div className="save-button" onClick={saveMovie}>Save</div>
    </div>
    
  );
};

export default MovieCard;
