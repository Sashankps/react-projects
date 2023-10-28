import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <h2>Pokedex</h2>
        <h3>Total Exp : {this.props.totalExp}</h3>
        {this.props.isWinner ? <h2>Winner</h2> : <h2>Loser</h2>}
        <div className="Pokedex-cards">
          {this.props.pokemonData.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
