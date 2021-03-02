import React from "react";
import PokeList from "./PokeList";
import pokemons from "../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons,
      //favs: []
    };
  }
  render() {
    return <PokeList pokemons={this.state.pokemons} />;
  }
}
export default App;
