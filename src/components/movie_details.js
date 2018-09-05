import React from 'react';

const MovieDetails = (props) => {
  // check if null or undef
  if(!props.movie) {
    return (
      <div>
        <br></br>
        Loading...
        <br></br>
      </div>
    )
  }

  // preparing yt video url
  const movie = `https://www.youtube.com/embed/${props.movie.id}`;

  return (
    <div className="card mb-3">
      <div className="embed-responsive embed-responsive-16by9 card-img-top">
        <iframe className="embed-responsive-item" src={movie} title="YouTube Player" allowFullScreen></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.movie.title}</h5>
        <p className="card-text">{props.movie.description}</p>
      </div>
    </div>
  )
}

export default MovieDetails;