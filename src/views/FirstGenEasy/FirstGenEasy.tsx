import React, { useContext } from 'react';

import Game from '../../components/Game';
import PlayerCard from '../../components/player-card';
import { FirstGenEasyContext } from './FirstGenEasyContext';

const FirstGenEasy = () => {
  const { 
    pokemon, 
    numberOfLifes, 
    
    gameProps, 
    pokeStatsLS,

    addWordLSManagement, 
    finishGameLSManagement, 

    handleNewGame 
  } = useContext(FirstGenEasyContext);

  const [ openPlayerCard, setOpenPlayerCard ] = React.useState(false);
  console.log(openPlayerCard);
  console.log(pokeStatsLS);
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
      <button type='button' onClick={() => setOpenPlayerCard(true)} >
        Player Card
      </button>
    </>
  );
};

export default FirstGenEasy;