import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './components/movies_list';
import SearchBar from './components/search_bar';
import MovieDetails from './components/movie_details';

// Underscore libs
import _ from 'underscore';

// YouTube lib and key
import YouTube from 'youtube-search';
const youTubeAPIKey = 'AIzaSyDW7zTVlbqWLh07IYCBhPYNXt2tQk_KoHw';


class App extends Component {
  constructor() {
    super()

    this.state = {
      results: [],
      selectedMovie: null,
    };

    // config for youtube api
    this.ytOpts = {
      maxResults: 10,
      key: youTubeAPIKey,
    };

    // init fetch
    this.fetchYouTubeMovies("");
  }

  // yt videos fetching method
  fetchYouTubeMovies(term) {
    YouTube(term, this.ytOpts).then( response => {
      this.setState({
        results: response.results,
        selectedMovie: response.results[0],
      })
      console.log(response);
    }).catch(err => {
      console.log('Cant fetch youtube data: ', err);
    });
  }

  // searching with throttling
  searchMovies = _.debounce(term => this.fetchYouTubeMovies(term), 500);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React YouTube Player</h1>
        </header>
        <br/>
          <div className="row">
            <div className="col-lg-8">
              <SearchBar onSearchInputChange={term => this.searchMovies(term)}/>
              <MovieDetails movie={this.state.selectedMovie}/>
            </div>
            <div className="col-lg-4">
              <MoviesList movies={this.state.results} onMovieSelect={movie => this.setState({selectedMovie: movie})}/>
            </div>
          </div>
      </div>
    )
  }
}

export default App;