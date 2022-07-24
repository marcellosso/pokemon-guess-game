import React, { useContext } from 'react';

import Game from '../../components/Game';
import { FirstGenEasyContext } from './FirstGenEasyContext';

const FirstGenEasy = () => {
  const { 
    pokemon, 
    numberOfLifes, 
    
    gameProps, 

    addWordLSManagement, 
    finishGameLSManagement, 

    handleNewGame 
  } = useContext(FirstGenEasyContext);

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
    </>
  );
};

export default FirstGenEasy;