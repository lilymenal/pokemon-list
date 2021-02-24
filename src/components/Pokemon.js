import React from "react";
import "../stylesheet/Pokemon.css";

const Pokemon = (props) => {
  const typePokemons = props.pokeProp.types.map((pokemons, id) => {
    return (
      <li key={id} className="types">
        {pokemons}
      </li>
    );
  });
  return (
    <div className="containerPoke">
      <img src={props.pokeProp.url}></img>
      <h2 className="name">{props.pokeProp.name}</h2>
      <ul className="typePokemons">{typePokemons}</ul>
    </div>
  );
};
export default Pokemon;
