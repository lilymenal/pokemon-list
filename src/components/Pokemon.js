import React from "react";

const Pokemon = (props) => {
  const typePokemons = props.pokeProp.types.map((pokemons, id) => {
    return (
      <li key={id} className="types">
        {pokemons}
      </li>
    );
  });
  return (
    <div className="Container">
      <img src={props.pokeProp.url}></img>
      <h2 className="name">{props.pokeProp.name}</h2>
      <ul className="typePokemons">{typePokemons}</ul>
    </div>
  );
};
export default Pokemon;
