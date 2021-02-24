import React from "react";

const Pokemon = (props) => {
  const itemPokemons = props.pokeProp.types.map((pokemons, i) => {
    return (
      <li key={pokemons.id} className="types">
        {pokemons}
      </li>
    );
  });
  return (
    <article className="Container">
      <h2>{props.pokeProp.name}</h2>
      <img src={props.pokeProp.url}></img>
      <ul>{itemPokemons}</ul>
    </article>
  );
};
export default Pokemon;
