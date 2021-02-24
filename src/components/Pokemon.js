import React from "react";

const Pokemon = (props) => {
  const typePokemons = props.pokeProp.types.map((pokemons, i) => {
    return (
      <li key={pokemons.id} className="types">
        {pokemons}
      </li>
    );
  });
  return (
    <div className="Container">
      <img src={props.pokeProp.url}></img>
      <h2>{props.pokeProp.name}</h2>
      <ul>{typePokemons}</ul>
    </div>
  );
};
export default Pokemon;
