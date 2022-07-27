import React, { FC } from 'react';

import { PokemonDataType } from '../../types';

interface IPokemonDataRow {
  pokemonData: PokemonDataType & { iconPath: string }
}

const PokemonDataRow : FC<IPokemonDataRow> = ({ pokemonData }) => {
  
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
  const pokemonImg = require(`../../config/${pokemonData.iconPath}/${pokemonData.number}.png`);

  return (
    <div className='pokemonRow'>
      <div className='pokeIcon'>
        <img 
          src={pokemonImg} 
          alt={`Pokemon - ${pokemonData.name}`}
        />
        <p>{pokemonData.number}</p>
      </div>

      <div className='infoContainer'>
        <h3>{pokemonData.name}</h3>
        <div className='mainInfo commonInfo'>
          <h4>Type: {pokemonData.type}</h4>
          <h4>HP: {pokemonData.hp}</h4>
        </div>

        <div className='sizeInfo commonInfo'>
          <h4>Height (m): {pokemonData.height}</h4>
          <h4>Weight (kg): {pokemonData.weight}</h4>
        </div>

        <div className='battleInfo commonInfo'>
          <h4>Attk: {pokemonData.attack}</h4>
          <h4>Def: {pokemonData.defense}</h4>
          <h4>Spd: {pokemonData.speed}</h4>
        </div>

        {/* <p>Generation: {pokemonData.generation}</p> */}
      </div>
    </div>
  );
};

export default PokemonDataRow;