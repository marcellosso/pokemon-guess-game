import React, { useContext } from 'react';

import Game from '../../components/Game';
import PlayerCard from '../../components/player-card';
import Pokedex from '../../components/pokedex';
import { FirstGenEasyContext } from './FirstGenEasyContext';

const FirstGenEasy = () => {
  const { 
    pokemon, 
    numberOfLifes, 
    
    gameProps, 

    pokeStatsLS,
    capturedPokeStatsLS,

    addWordLSManagement, 
    finishGameLSManagement, 

    handleNewGame 
  } = useContext(FirstGenEasyContext);

  const [ openPlayerCard, setOpenPlayerCard ] = React.useState(false);
  const [ openPokedex, setOpenPokedex ] = React.useState(false);

  return (
    <>
      <div>First Gen</div>
      <Game 
        pokemon={pokemon} 
        numberOfLifes={numberOfLifes} 
        gameProps={gameProps} 
        addWordAction={addWordLSManagement}
        handleNewGame={handleNewGame}
        finishGameAction={finishGameLSManagement}
      />
      {
        openPlayerCard && (
          <PlayerCard 
            setOpenPlayerCard={setOpenPlayerCard} 
            playerStats={pokeStatsLS} 
          />
        )
      }
      {
        openPokedex && (
          <Pokedex 
            setOpenPokedex={setOpenPokedex} 
            capturedPokemons={capturedPokeStatsLS} 
          />
        )
      }
      <button type='button' onClick={() => setOpenPlayerCard(true)} >
        Player Card
      </button>
      <button type='button' onClick={() => setOpenPokedex(true)} >
        Pokedex
      </button>
    </>
  );
};

export default FirstGenEasy;