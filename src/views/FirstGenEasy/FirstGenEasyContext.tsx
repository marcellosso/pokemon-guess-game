import React, { createContext, FC, ReactElement, useEffect, useMemo, useState } from 'react';

import * as config from '../../config/config';
import { COLOR_CHECK_ENUM } from '../../enums';
import { getPokemonIndexByDay } from '../../helpers';
import useLocalStorage from '../../hooks/useLocalStorage';
import _ from '../../lodash-mixins';
import { GamePropsType, IGuesses, PokemonDataType, UsedKeysType } from '../../types';

interface IProvider {
  children: JSX.Element
}

type FirstGenEasyContexTypes = {
  numberOfLifes: number,
  pokemon: PokemonDataType,
  gameProps: GamePropsType
}

const FirstGenEasyContext = createContext<FirstGenEasyContexTypes>({} as FirstGenEasyContexTypes);

const Provider : FC<IProvider> = ({ children }) : ReactElement => {
  const numberOfLifes = 1;

  const pokemonData = useMemo(() => config.pokemon.firstGenPokemonData, []);
  const gameStartDate = useMemo(() => config.START_DATE, []);

  const [pokeMetaLS, setPokeMetaLS] = useLocalStorage('pokeMeta', config.defaultPokeMeta);
  const [pokeStateLS, setPokeStateLS] = useLocalStorage('pokeState', config.defaultPokeState);

  const [gameProps, setGameProps] = useState<GamePropsType>(config.defaultGameAttributes);

  const pokemon = useMemo(() => pokemonData[getPokemonIndexByDay(gameStartDate, pokemonData)], [gameStartDate, pokemonData]);

  const mapGuessesToUsedKey = (guesses: IGuesses[][]) => {
    const flattenedGuesses = _.flattenDeep(guesses);
    const uniqGuesses = _.uniqBy(flattenedGuesses, 'key');

    const usedKeys = {} as UsedKeysType;
    uniqGuesses.forEach((guess) => { usedKeys[guess.key] = guess.color as COLOR_CHECK_ENUM; });
    return usedKeys;
  };

  useEffect(() => {
    const currDay = new Date().getDate();
    const currMonth = new Date().getMonth() + 1;
    const currYear = new Date().getFullYear();

    const lastPlayedDay = new Date(pokeMetaLS.startTime).getDate();
    const lastPlayedMonth = new Date(pokeMetaLS.startTime).getMonth() + 1;
    const lastPlayedYear = new Date(pokeMetaLS.startTime).getFullYear();

    if (
      currDay === lastPlayedDay &&
      currMonth === lastPlayedMonth &&
      currYear === lastPlayedYear
    ) {
      if (pokeMetaLS.gameOver) {
        const newGameProps = {...config.defaultGameAttributes} as GamePropsType;
        if (pokeMetaLS.win) newGameProps.isCorrect = true;
        const { formattedGuesses, history, turn } = pokeStateLS;
        newGameProps.turn = turn;
        newGameProps.history = history;
        newGameProps.guesses = formattedGuesses;
        newGameProps.currentGuess = ''; 
        newGameProps.usedKeys = mapGuessesToUsedKey(formattedGuesses);
        
        setGameProps(newGameProps);
      }
    } 
  }, [pokeMetaLS, pokeStateLS]);

  // TODO Gerar mensagem para copiar
  // const generateScoreCard = async () => {
  //   let result = `Corporate Wordle ${getTheWordIndexForToday() + 1} / ${wordList.length}\n\n`;
  //   scoreCard.forEach((line) => {
  //     const lineOutput = [...line].reduce((prev, curr) => {
  //       switch (curr) {
  //         case 'green':
  //           return prev + '🟩';
  //         case 'yellow':
  //           return prev + '🟨';
  //         default:
  //           return prev + '⬛';
  //       }
  //     }, '');
  //     result += `${lineOutput}\n`;
  //   });
  //   await navigator.clipboard.writeText(result);
  //   showMessage("Result is copied to clipboard")
  // }

  return (
    <FirstGenEasyContext.Provider
      value={{
        numberOfLifes,
        pokemon,
        gameProps
      }}
    >
      {children}
    </FirstGenEasyContext.Provider>
  );
};

const FirstGenEasyContextProvider = Provider;

export { FirstGenEasyContext };
export { FirstGenEasyContextProvider };