import React from 'react';

import Game from '../components/Game';
import firstGen from '../config/pokemons';

const FirstGen = () => {
  const pokemon = firstGen[Math.floor(Math.random() * firstGen.length)];

  return (
    <>
    <div>First Gen</div>
    <Game pokemon={pokemon} />
    </>
  );
};

export default FirstGen;