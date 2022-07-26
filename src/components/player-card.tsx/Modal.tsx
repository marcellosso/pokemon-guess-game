import React from 'react';

import { PokemonDataType } from '../../types';

import './styles.css';

interface IModal {
  turn: number,
  isCorrect: boolean,
  showGeneration?: boolean,
  pokemon: PokemonDataType
}

const Modal = ({ isCorrect, turn, pokemon, showGeneration = false } : IModal) => {
  
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
  const pokemonImg = require(`../../config/assets/${pokemon.number}.png`);
  return (
    <div className='modal'>
      {
        isCorrect && (
          <div>
            <h1>{pokemon.name} capturado!</h1>
            {/* <h2 className='solution'>{pokemon.name}</h2> */}
            <h3>Voce capturou em {turn} tentativas &#9787;</h3>
            <img 
              src={pokemonImg} 
              alt={`Pokemon - ${pokemon.name}`}
            />
            <p>Type: {pokemon.type}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Speed: {pokemon.speed}</p>
            <p>Height (m): {pokemon.height}</p>
            <p>Weight: (kg): {pokemon.weight}</p>
            { showGeneration && <p>Gen: {pokemon.generation}</p> }

          </div>
        )
      }
      {
        !isCorrect && (
          <div>
            <h1>{pokemon.name} escapou!</h1>
            <img 
              src={pokemonImg} 
              alt={`Pokemon - ${pokemon.name}`}
            />
            <p>Type: {pokemon.type}</p>
            { showGeneration && <p>Gen: {pokemon.generation}</p> }
          </div>
        )
      }
    </div>
  );
};
      
export default Modal;