import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateForm = props => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  useEffect(() => {
    const movieToBeEdited = props.movies.find(
      movie => `${movie.id}` === props.match.params.id
    );
    if (movieToBeEdited) setMovie(movieToBeEdited);
  }, [props.match.params.id, props.movies]);

  const handleInputs = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "metascore") value = parseInt(value, 10);
    else if (e.target.name === "stars") {
      console.log(movie.stars);
      let starsArr = value.split(",");
      setMovie({
        ...movie,
        [e.target.name]: starsArr
      });
    } else {
      setMovie({
        ...movie,
        [e.target.name]: value
      });
    }
  };

  const updateMovie = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        props.setToggleRender(!props.toggleRender);
        setTimeout(() => props.history.push("/"), 250);
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={updateMovie}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={movie.title}
        onChange={handleInputs}
      />
      <label>Director</label>
      <input
        type="text"
        name="director"
        value={movie.director}
        onChange={handleInputs}
      />
      <label>Metascore:</label>
      <input
        type="text"
        name="metascore"
        value={movie.metascore}
        onChange={handleInputs}
      />
      <label>Stars:</label>
      <input
        type="text"
        name="stars"
        value={movie.stars}
        onChange={handleInputs}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
