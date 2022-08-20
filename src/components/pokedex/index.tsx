import React, { useMemo } from 'react';

import { firstGenPokemon } from '../../config/config';
import { POKEMON_TYPE_ENUM } from '../../enums';
import useCancelModal from '../../hooks/useCancelModal';
import _ from '../../lodash-mixins';
import { PokemonDataType } from '../../types';
import PokemonDataRow from './Row';

import './styles.css';

interface IPokedex {
  setOpenPokedex: (_o: boolean) => void,
  capturedPokemons: PokemonDataType[]
}

const Pokedex = ({ setOpenPokedex, capturedPokemons } : IPokedex) => { 
  const onEscapePressed = useCancelModal(setOpenPokedex);

  const allPokemonData = useMemo(() => {
    const allPokemon = [] as (PokemonDataType & { iconPath: string })[];

    _.forEach(_.range(1, 152), (id) => {
      let pokemonData = _.find(capturedPokemons, (pokemon) => pokemon.number === id) as PokemonDataType;
      let iconPath = 'assets';

      if (!pokemonData) {
        iconPath = 'assets-sill';
        pokemonData = {
          number: id,
          name: new Array((firstGenPokemon.find((pokemon) => pokemon.number === id) as PokemonDataType).name.length).fill('?').join(''),
          type: POKEMON_TYPE_ENUM.UNDEFINED,
          generation: 0,
          height: 0,
          weight: 0.0,
          hp: 0,
          attack: 0,
          defense: 0,
          speed: 0
        };
      } 

      allPokemon.push({ ...pokemonData, iconPath });
    });

    return _.sortBy(allPokemon, 'number');
  }, [capturedPokemons]);

  return (
    <div 
      className='pokedex' 
      onClick={(e) => {
        e.stopPropagation(); 
        setOpenPokedex(false);
      }}
      onKeyDown={onEscapePressed}
      role='button'
      tabIndex={0}
    >
          <div className='mainContainer'>
            <h1 className='mainH1'>Pokedex</h1>

            {
              allPokemonData.map((capturedPokemon) => (
                <PokemonDataRow pokemonData={capturedPokemon} />
              ))
            }

          </div>
    </div>
  );
};
      
export default Pokedex;