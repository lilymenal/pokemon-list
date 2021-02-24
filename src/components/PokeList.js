import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheet/PokeList.css";

class PokeList extends React.Component {
  render() {
    const item = this.props.pokemons.map((pokeItem, id) => {
      return (
        <li className="pokeList" key={id}>
          <Pokemon pokeProp={pokeItem} />
        </li>
      );
    });
    return (
      <div className="container">
        <ul className="itemContainer">{item}</ul>
      </div>
    );
  }
}
export default PokeList;
