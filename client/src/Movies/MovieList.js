import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.setState({ movies: this.props.movies });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => {
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
    );
  }
}
