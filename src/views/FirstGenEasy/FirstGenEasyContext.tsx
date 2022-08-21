import React, { createContext, FC, ReactElement, useEffect, useMemo, useState } from 'react';

import * as config from '../../config/config';
import { COLOR_CHECK_ENUM } from '../../enums';
import { getDayDifference, getPokemonIndexByDay } from '../../helpers';
import useLocalStorage from '../../hooks/useLocalStorage';
import _ from '../../lodash-mixins';
import { GamePropsType, IConfigPokeMeta, IConfigPokeState, IConfigPokeStats, IGuesses, PokemonDataType, UsedKeysType } from '../../types';

interface IProvider {
  children: JSX.Element
}

type FirstGenEasyContexTypes = {
  numberOfLifes: number,
  pokemon: PokemonDataType,

  gameProps: GamePropsType,
  
  pokeMetaLS: IConfigPokeMeta,
  pokeStatsLS: IConfigPokeStats,
  capturedPokeStatsLS: PokemonDataType[],

  addWordLSManagement: (_s: IConfigPokeState) => void
  finishGameLSManagement: (_c: boolean, _t: number) => void,

  handleNewGame: () => void
}

const FirstGenEasyContext = createContext<FirstGenEasyContexTypes>({} as FirstGenEasyContexTypes);

const Provider : FC<IProvider> = ({ children }) : ReactElement => {
  const numberOfLifes = 4; // TURNS ARE LIFE + 1

  const pokemonData = useMemo(() => config.firstGenPokemon, []);

  const [pokeMetaLS, setPokeMetaLS] = useLocalStorage<IConfigPokeMeta>('pokeFirstEasyMeta', config.defaultPokeMetaLS);
  const [pokeStateLS, setPokeStateLS] = useLocalStorage<IConfigPokeState>('pokeFirstEasyState', config.defaultPokeStateLS);
  const [capturedPokeStatsLS, setCapturedPokeStatsLS] = useLocalStorage<PokemonDataType[]>('pokeFirstEasyCapturedStats', config.defaultCapturedPokeStatsLs);
  const [pokeStatsLS, setPokeStatsLS] = useLocalStorage<IConfigPokeStats>('pokeFirstEasyStats', config.defaultPokeStatsLS(numberOfLifes + 1));

  const [gameProps, setGameProps] = useState<GamePropsType>(config.defaultGameAttributes);

  // const pokemon = useMemo(() => pokemonData[getPokemonIndexByDay(pokemonData)], [pokemonData]);
  const pokemon = pokemonData.find((el) => el.number === 4) as PokemonDataType;

  const mapGuessesToUsedKey = (guesses: IGuesses[][]) => {
    const flattenedGuesses = _.flattenDeep(guesses);
    const uniqGuesses = _.uniqBy(flattenedGuesses, 'key');

    const usedKeys = {} as UsedKeysType;
    uniqGuesses.forEach((guess) => { usedKeys[guess.key] = guess.color as COLOR_CHECK_ENUM; });
    return usedKeys;
  };

  const addWordLSManagement = (pokeState: IConfigPokeState) => {
    setPokeStateLS(pokeState);
  };

  const finishGameLSManagement = (isCorrect: boolean, catchTurn: number) => {
    const endTime = new Date().getTime();

    setCapturedPokeStatsLS((prevCapturedPokes: PokemonDataType[]) => {
      const newCapturedPokes = [ ...prevCapturedPokes ];

      newCapturedPokes.push(pokemon);

      return _.orderBy(newCapturedPokes, 'number');
    });

    setPokeMetaLS((prevMeta : IConfigPokeMeta) => {
      const newMeta = { ...prevMeta };

      newMeta.endTime = endTime;
      newMeta.win = isCorrect;

      return newMeta;
    });

    setPokeStatsLS((prevStats: IConfigPokeStats) => {
      const newStats = { ...prevStats };

      newStats.gamesPlayed = prevStats.gamesPlayed + 1;
      newStats.gamesWon = isCorrect ? prevStats.gamesWon + 1 : prevStats.gamesWon;
      newStats.winStreak = isCorrect ? prevStats.winStreak + 1 : 0;
      newStats.lastGameWon = isCorrect ? getDayDifference(new Date(config.GAME_START_DATE)) : prevStats.lastGameWon;
      
      const catchGraph = [ ...prevStats.catchGraph ];
      catchGraph[catchTurn] += 1;
      newStats.catchGraph = catchGraph;

      const timeStats = { ...prevStats.timeStats };
      const newEndTime = endTime - pokeMetaLS.startTime;

      timeStats.minTime = newEndTime < timeStats.minTime ? newEndTime : timeStats.minTime;
      timeStats.maxTime = newEndTime > timeStats.maxTime ? newEndTime : timeStats.maxTime;
      timeStats.avgTime = Math.floor((timeStats.minTime + timeStats.maxTime) / 2);

      newStats.timeStats = { ...timeStats };

      return newStats;
    });
  };

  const handleNewGame = () => {
    setPokeMetaLS((prevMeta : IConfigPokeMeta) => {
      const newMeta = { ...prevMeta };

      newMeta.startTime = new Date().getTime();
      newMeta.endTime = 0;
      newMeta.win = false;
      newMeta.day = getDayDifference(new Date(config.GAME_START_DATE));

      return newMeta;
    });
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
        const newGameProps = {...config.defaultGameAttributes} as GamePropsType;
        if (pokeMetaLS.win) newGameProps.isCorrect = true;
        const { formattedGuesses, history, turn } = pokeStateLS;

        const newFormattedGuesses = [] as IGuesses[][];

        _.forEach(formattedGuesses, (guess) => {
          newFormattedGuesses.push(guess.map((el : IGuesses) => ({
            ...el,
            color: `${el.color}Only`
          })));
        });

        newGameProps.turn = turn;
        newGameProps.history = history;
        newGameProps.guesses = newFormattedGuesses;
        newGameProps.currentGuess = ''; 
        newGameProps.usedKeys = mapGuessesToUsedKey(formattedGuesses);
        
        setGameProps(newGameProps);
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FirstGenEasyContext.Provider
      value={{
        numberOfLifes,
        pokemon,

        gameProps,

        pokeMetaLS,
        pokeStatsLS,
        capturedPokeStatsLS,

        addWordLSManagement,
        finishGameLSManagement,

        handleNewGame,
      }}
    >
      {children}
    </FirstGenEasyContext.Provider>
  );
};

const FirstGenEasyContextProvider = Provider;

export { FirstGenEasyContext };
export { FirstGenEasyContextProvider };