import React, { useMemo } from 'react';

import firstGenPokemonData from '../../config/firstGenPokemons';
import useCancelModal from '../../hooks/useCancelModal';
import { PokemonDataType } from '../../types';
import Row from '../board/Row';
import PokemonDataRow from '../pokedex/Row';

import './styles.css';
import '../pokedex/styles.css';

interface ITutorial {
  setOpenTutorial: (_b: boolean) => void,
}

const Tutorial = ({ setOpenTutorial } : ITutorial) => {
  
  const onEscapePressed = useCancelModal(setOpenTutorial);

  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
  const pokemonImg = require(`../../config/assets-sill/1.png`);

  const examplePokemon = useMemo(() => ({
    ...firstGenPokemonData.find((pokemon) => pokemon.number === 4), 
    iconPath: 'assets'
  }) as PokemonDataType & { iconPath: string }, []);
   
  const exemplaGuess = 
    [
        {
            "key": "c",
            "color": "greenOnly"
        },
        {
            "key": "h",
            "color": "greenOnly"
        },
        {
            "key": "a",
            "color": "greenOnly"
        },
        {
            "key": "n",
            "color": "yellowOnly"
        },
        {
            "key": "s",
            "color": "greyOnly"
        },
        {
            "key": "e",
            "color": "yellowOnly"
        },
        {
            "key": "y",
            "color": "greyOnly"
        }
    ];

  return (
    <div 
      className='tutorial'
      onClick={(e) => {
        e.stopPropagation(); 
        setOpenTutorial(false);
      }}
      onKeyDown={onEscapePressed}
      role='button'
      tabIndex={0}
    >
      <div className='mainContainer'>
        <h2>Quem é esse Pokémon?</h2>
        <p className='tutorialParagraph'>Tente adivinhar o Pokémon do dia apenas com sua silhueta e 5 vidas!</p>
        <img 
          className='pokemonImg'
          src={pokemonImg} 
          alt='Pokemon silhueta tutorial'
        />
        
        <p className='tutorialParagraph'>Após cada tentativa, será revelado a posição das letras em relação a solução correta.</p>
        <Row guess={exemplaGuess} />
        <p className='tutorialParagraph'>As letras C, H, A fazem parte do nome do Pokémon e estão na posição certa, as letras N e Y também fazem parte porém estão na posição incorreta, as demais não fazem parte da solução.</p>

        <p className='tutorialParagraph pokedexParagraph'>Caso capturado, o Pokémon irá para sua Pokedex, onde é possível visualizar todos as informações dele e acompanhar a sua coleção.</p>
        <PokemonDataRow pokemonData={examplePokemon}/>
      </div>
    </div>
  );
};
      
export default Tutorial;