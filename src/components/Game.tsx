import React, { FC, useCallback, useEffect, useState } from 'react';

import useGame from '../hooks/useGame';
import _ from '../lodash-mixins';
import { GamePropsType, PokemonDataType } from '../types';
import Grid from './board/Grid';
import Keypad from './keyboad/Keypad';
import Modal from './player-card.tsx/Modal';

interface IGameProps {
  pokemon: PokemonDataType,
  numberOfLifes: number,
  gameProps : GamePropsType
}

const Game : FC<IGameProps> = ({ pokemon, numberOfLifes, gameProps }) : JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const {
    currentGuess,
    handleKeyUp,
    guesses,
    isCorrect,
    turn,
    usedKeys
  } = useGame(
    {
    ...pokemon,
    name: _.lowerCase(pokemon.name)
    },
    numberOfLifes,
    gameProps
  );

  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
  const pokemonImg = require(`../config/assets/${pokemon.number}.png`);

  const winActions = useCallback(async () => {
    const calculatedDelay = (pokemon.name.length * 38) * 10;
    await _.sleep(calculatedDelay);

    const correctElem = document.querySelectorAll(".correct > .green");

    // eslint-disable-next-line no-restricted-syntax
    for (const elem of Array.from(correctElem)) {
        elem.classList.add('animateJump');
        // eslint-disable-next-line no-await-in-loop
        await _.sleep(100);
    }

    await _.sleep(200);
    setShowModal(true);
}, [pokemon.name]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    if (isCorrect) {
      winActions();
      window.removeEventListener('keyup', handleKeyUp);
    }

    if (turn > numberOfLifes) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyUp);
    }

    return () => window.removeEventListener('keyup', handleKeyUp);

  }, [handleKeyUp, isCorrect, turn, winActions, numberOfLifes]);

  return (
    <div>
      <div>Solution - {pokemon.name}</div>
      <img 
        src={pokemonImg} 
        alt="Pokemon silhouette"
      />
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        isCorrect={isCorrect}
        numberOfLifes={numberOfLifes}
      />

      <Keypad usedKeys={usedKeys} addNewKey={handleKeyUp} />

      { showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={pokemon.name}
        />
      ) }
    </div>
  );
};

export default Game;