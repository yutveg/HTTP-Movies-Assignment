import React, { useState } from "react";

const UpdateForm = props => {
  const [movie, setMovie] = useState();

  const handleInputs = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "metascore") value = parseInt(value, 10);
  };

  return (
    <form>
      <label></label>
      <input
        type="text"
        placeholder="Title.."
        name="title"
        value={movie.title}
        onChange={handleInputs}
      />
      <label></label>
      <input
        type="text"
        placeholder="Director.."
        name="director"
        value={movie.director}
        onChange={handleInputs}
      />
      <label></label>
      <input
        type="text"
        placeholder="Metascore.."
        name="metascore"
        value={movie.metascore}
        onChange={handleInputs}
      />
    </form>
  );
};

export default UpdateForm;
