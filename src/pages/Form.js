import axios from "axios";
import React, { useState } from "react";
import Main from "../components/Main";

const Form = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [message, setMessage] = useState("");
  const handleInputChange = (event) => {
    setPokeName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokeName}`;
    axios
      .get(apiUrl)
      .then((res) => setPokemon(res.data))
      .catch((err) => setMessage("Aucun pokemon trouvé"));
  };

  setTimeout(() => {
    setMessage("");
  }, 2500);

  return (
    <div>
      <div className="search-container">
        <h1>POKEDEX</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="poke-search">Entre un nom de pokémon</label>
          <input
            type="text"
            id="poke-search"
            value={pokeName}
            onChange={handleInputChange}
          />
          <button type="submit">Chercher</button>
        </form>
        <span id="error">{message}</span>
      </div>
      <Main pokemon={pokemon} />
    </div>
  );
};

export default Form;
