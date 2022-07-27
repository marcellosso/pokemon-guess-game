/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import useGame from '../hooks/useGame';
import _ from '../lodash-mixins';
import { GamePropsType, IConfigPokeState, PokemonDataType } from '../types';
import Grid from './board/Grid';
import Modal from './endgame/Modal';
import Keypad from './keyboad/Keypad';

interface IGameProps {
  pokemon: PokemonDataType,
  numberOfLifes: number,

  gameProps : GamePropsType,

  addWordAction: (_s: IConfigPokeState) => void,
  finishGameAction: (_c: boolean, _t: number) => void,

  handleNewGame: () => void
}

const Game : FC<IGameProps> = ({ 
  pokemon, 
  numberOfLifes, 
  gameProps, 

  addWordAction, 
  finishGameAction,

  handleNewGame
}) : JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

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
    gameProps,
    addWordAction,
    handleNewGame
  );

  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
  const pokemonImg = require(`../config/assets-sill/${pokemon.number}.png`);

  const calculatedAnimationDelay = useMemo(() => (pokemon.name.length * 38) * 10, [pokemon.name]);

  const triggerAnimations = useCallback(async () => {
    await _.sleep(calculatedAnimationDelay);

    let animationClass = '';
    let animationElem = document.querySelectorAll('.incorrect > .grey, .incorrect > .yellow, .incorrect > .green');

    if (isCorrect) {
      animationElem = document.querySelectorAll(".correct > .green");
      animationClass = 'animateJump';
    } else {
      animationClass = 'animateBounce';
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const elem of Array.from(animationElem)) {
      elem.classList.add(animationClass);
      // eslint-disable-next-line no-await-in-loop
      await _.sleep(100);
    } 
  
    await _.sleep(350);
  }, [calculatedAnimationDelay, isCorrect]);

  const endGameActions = useCallback(async () => {
    finishGameAction(isCorrect, turn);
    await triggerAnimations();
    setShowModal(true);
}, [isCorrect, turn]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    if (isCorrect) {
      setGameEnded(true);
      window.removeEventListener('keyup', handleKeyUp);
    }

    if (turn > numberOfLifes) {
      setGameEnded(true);
      window.removeEventListener('keyup', handleKeyUp);
    }

    return () => window.removeEventListener('keyup', handleKeyUp);

  }, [handleKeyUp, isCorrect, turn]);

  // TODO Remove this and add proper delayed animation on modal
  const callModal = async () => {
    await _.sleep(1000);
    setShowModal(true);
  };

  useEffect(() => {
    if (gameEnded && !gameProps.isCorrect) endGameActions();
    else if (gameEnded && gameProps.isCorrect) callModal();
  },[gameEnded]);

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
          pokemon={pokemon}
        />
      ) }
    </div>
  );
};

export default Game;