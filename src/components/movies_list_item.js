import React from 'react';

const MoviesListitem = (props) => {
  const movie = props.movie;
  const onMovieSelect = props.onMovieSelect;

  return (
    <li className='list-group-item list-item' onClick={() => onMovieSelect(movie)}>
      <div className='row'>
        <div className='col-4'>
          <img src={movie.thumbnails.medium.url} className='img-fluid' alt='Movie thumbnail'/>
        </div>
        <div className='col-8'>
          <div className=''>
            <h5>{movie.title}</h5>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MoviesListitem;