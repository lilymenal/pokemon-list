import React from "react";
import PokeList from "./PokeList";
import pokemons from "../data/data.json";

class App extends React.Component {
  render() {
    return <PokeList pokemons={pokemons} />;
  }
}
export default App;
