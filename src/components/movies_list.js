import React from 'react';
import MoviesListItem from './movies_list_item';

const MoviesList = (props) => {
  const moviesList = props.movies.map(movie => {
    return <MoviesListItem key={movie.id} movie={movie} onMovieSelect={props.onMovieSelect}/>;
  })

  return (
    <ul className='list-group'>
      {moviesList}
    </ul>
  )
}

export default MoviesList;