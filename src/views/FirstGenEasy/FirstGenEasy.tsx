import React, { useContext } from 'react';

import PlayerCardIcon from '../../components/custom-icons/PlayerCardIcon';
import PokedexIcon from '../../components/custom-icons/PokedexIcon';
import Game from '../../components/Game';
import PlayerCard from '../../components/player-card';
import Pokedex from '../../components/pokedex';
import { FirstGenEasyContext } from './FirstGenEasyContext';

const FirstGenEasy = () => {
  const { 
    pokemon, 
    numberOfLifes, 
    
    gameProps, 

    pokeMetaLS,
    pokeStatsLS,
    capturedPokeStatsLS,

    addWordLSManagement, 
    finishGameLSManagement, 

    handleNewGame 
  } = useContext(FirstGenEasyContext);

  const [openPlayerCard, setOpenPlayerCard] = React.useState(false);
  const [openPokedex, setOpenPokedex] = React.useState(false);

  return (
    <>
      <Game 
        pokemon={pokemon} 
        numberOfLifes={numberOfLifes} 
        gameProps={gameProps} 
        gameDay={pokeMetaLS.day}
        winStreak={pokeStatsLS.winStreak}
        shouldOpenTutorial={pokeStatsLS.gamesPlayed === 0 && pokeMetaLS.startTime === 0}
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
    
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '10%',
          position: 'absolute',
          bottom: 0,
          right: 0,
          justifyContent: 'space-between'
        }}
      >

        <button 
          type='button' 
          className='playerInfoIcons'
          onClick={(e) => {
            e.stopPropagation(); 
            setOpenPokedex(true);
          }} 
        >
          <PokedexIcon />
        </button>

        <button 
          type='button' 
          className='playerInfoIcons'
          onClick={(e) => {
            e.stopPropagation(); 
            setOpenPlayerCard(true);
          }} 
          style={{
            marginBottom: '-0.3em'
          }}
        >
          <PlayerCardIcon />
        </button>
      </div>
    </>
  );
};

export default FirstGenEasy;