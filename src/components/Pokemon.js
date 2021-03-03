import React from "react";
import "../stylesheet/Pokemon.css";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const typePokemons = props.pokeProp.types.map((pokemons, id) => {
    return (
      <li key={id} className="types">
        {pokemons}
      </li>
    );
  });
  return (
    <article className="containerPoke">
      <img src={props.pokeProp.url}></img>
      <h2 className="name">{props.pokeProp.name}</h2>
      <ul className="typePokemons">{typePokemons}</ul>
    </article>
  );
};

Pokemon.propTypes = {
  pokeProp: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
};
export default Pokemon;
