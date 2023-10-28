import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemonData: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };

  render() {
    const arr1 = [];
    const arr2 = [];

    let totalExp1 = 0;
    let totalExp2 = 0;

    let check = false;

    for (let i = 0; i < this.props.pokemonData.length; i++) {
      if (arr1.length !== 4) {
        const randomIndex = Math.floor(
          Math.random() * this.props.pokemonData.length
        );
        const randomPokemon = this.props.pokemonData.splice(randomIndex, 1)[0];
        arr1.push(randomPokemon);
      }
    }
    for (let i = 0; i < this.props.pokemonData.length; i++) {
      arr2.push(this.props.pokemonData[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
      totalExp1 += arr1[i].base_experience;
    }
    for (let i = 0; i < arr2.length; i++) {
      totalExp2 += arr2[i].base_experience;
    }

    if (totalExp1 > totalExp2) {
      check = true;
    }

    return (
      <div>
        <Pokedex pokemonData={arr1} isWinner={check} totalExp={totalExp1} />
        <Pokedex pokemonData={arr2} isWinner={!check} totalExp={totalExp2} />
      </div>
    );
  }
}

export default Pokegame;
