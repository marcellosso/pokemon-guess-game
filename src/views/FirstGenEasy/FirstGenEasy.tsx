import React, { useContext, useEffect } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';

import Game from '../../components/Game';
import PlayerCard from '../../components/player-card';
import Pokedex from '../../components/pokedex';
import TutorialModal from '../../components/tutorial-modal';
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
  const [openTutorial, setOpenTutorial] = React.useState(false);

  useEffect(() => {
    if (pokeStatsLS.gamesPlayed === 0 && pokeMetaLS.startTime === 0)
      setOpenTutorial(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Game 
        pokemon={pokemon} 
        numberOfLifes={numberOfLifes} 
        gameProps={gameProps} 
        gameDay={pokeMetaLS.day}
        winStreak={pokeStatsLS.winStreak}
        addWordAction={addWordLSManagement}
        handleNewGame={handleNewGame}
        finishGameAction={finishGameLSManagement}
      />
      {
        openTutorial && (
          <TutorialModal 
            setOpenTutorial={setOpenTutorial} 
          />
        )
      }
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
          onClick={(e) => {
            e.stopPropagation(); 
            setOpenPlayerCard(true);
          }} 
        >
          Player Card
        </button>
        <button 
          type='button' 
          onClick={(e) => {
            e.stopPropagation(); 
            setOpenPokedex(true);
          }} 
        >
          Pokedex
        </button>
        
      </div>
        {/* <button 
          type='button' 
          onClick={(e) => {
            e.stopPropagation(); 
            setOpenTutorial(true);
          }} 
        >
          <AiFillQuestionCircle />
        </button> */}

    </>
  );
};

export default FirstGenEasy;