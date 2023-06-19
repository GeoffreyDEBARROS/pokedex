import React from "react";

const Main = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div className="main">
      <div className="title">
        <h2>{pokemon ? pokemon.name["fr"] : ""}</h2>
        <h4> {pokemon ? pokemon.category : ""} </h4>
      </div>
      <div className="pic-container">
        <img
          src={pokemon ? pokemon.sprites.regular : ""}
          alt={pokemon ? pokemon.name["fr"] : ""}
          height="300px"
        />
      </div>
    </div>
  );
};

export default Main;
