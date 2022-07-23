import React, { useContext } from 'react';

import Game from '../../components/Game';
import { FirstGenEasyContext } from './FirstGenEasyContext';

const FirstGenEasy = () => {
  const { pokemon, numberOfLifes, gameProps } = useContext(FirstGenEasyContext);

  return (
    <>
    <div>First Gen</div>
    <Game pokemon={pokemon} numberOfLifes={numberOfLifes} gameProps={gameProps} />
    </>
  );
};

export default FirstGenEasy;