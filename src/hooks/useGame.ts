/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

import _ from 'lodash';

import { defaultPokeStateLS, POSSIBLE_POKEMONS } from '../config/config';
import { COLOR_CHECK_ENUM } from '../enums';
import { GamePropsType, IConfigPokeState, IGuesses, PokemonDataType } from '../types';

const useGame = (
  pokemon: PokemonDataType, 
  numberOfLifes: number, 
  gameProps : GamePropsType, 
  addWordAction: (_s: IConfigPokeState) => void,
  handleNewGame: () => void,
  ) => {
  const [turn, setTurn] = useState(gameProps.turn);
  const [currentGuess, setCurrentGuess] = useState(gameProps.currentGuess);
  const [guesses, setGuesses] = useState<IGuesses[][]>(gameProps.guesses);
  const [history, setHistory] = useState<string[]>(gameProps.history);

  const [isCorrect, setIsCorrect] = useState(gameProps.isCorrect);

  // { a: 'green', b: 'yellow', c: 'grey' }
  const [usedKeys, setUsedKeys] = useState(gameProps.usedKeys);

  useEffect(() => {
    setTurn(gameProps.turn);
    setCurrentGuess(gameProps.currentGuess);
    setGuesses(gameProps.guesses);
    setHistory(gameProps.history);
    setIsCorrect(gameProps.isCorrect);
    setUsedKeys(gameProps.usedKeys);
  }, [gameProps]);

  // format a guess into an array of letter objects
  // [{key: 'a', color: 'yellow' }]
  const formatGuess = () => {
    const solutionArray : (string | null)[] = pokemon.name.split('');
    const formattedGuess = currentGuess.split('').map((letter) => (
      { key: letter, color: COLOR_CHECK_ENUM.GREY }
    ));

    // find any green letters
    formattedGuess.forEach((letter, index) => {
        if (solutionArray[index] === letter.key) {
            formattedGuess[index].color = COLOR_CHECK_ENUM.GREEN;
            solutionArray[index] = null;
        }
    });

    // find any yellow letters
    formattedGuess.forEach((letter, index) => {
        if (solutionArray.includes(letter.key) && letter.color !== COLOR_CHECK_ENUM.GREEN) {
            formattedGuess[index].color = COLOR_CHECK_ENUM.YELLOW;
            solutionArray[solutionArray.indexOf(letter.key)] = null;
        }
    });

    return formattedGuess;
  };

  const getGameStateInfo = ({ localGuesses, localHistory, localTurn }: { localGuesses: IGuesses[][], localHistory: string[], localTurn: number }) : IConfigPokeState => {
    const gameState = { ...defaultPokeStateLS };

    // gameState.pokemonStats = {
    //   name: pokemon.name,
    //   number: pokemon.number,
    //   type: pokemon.type,

    //   attack: pokemon.attack,
    //   defense: pokemon.defense,
    //   speed: pokemon.speed,

    //   height: pokemon.height,
    //   weight: pokemon.weight,
    //   hp: pokemon.hp,
    // };

    gameState.formattedGuesses = localGuesses;
    gameState.history = localHistory;
    gameState.turn = localTurn;

    return gameState;
  };

  const addNewGuess = (formattedGuess : IGuesses[]) => {
    let newFormattedGuesses = null as unknown as IGuesses[][];
    let newHistory = null as unknown as string[];
    let newTurn = null as unknown as number;

    setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses];
        newGuesses[turn] = formattedGuess;

        if (turn < numberOfLifes) newGuesses.push([]);
        newFormattedGuesses = newGuesses;
        return newGuesses;
    });

    if (currentGuess === pokemon.name) setIsCorrect(true);

    setHistory((prevHistory) => {
      const localNewHistory = [...prevHistory, currentGuess];
      newHistory = localNewHistory;
      return localNewHistory;
    });

    setTurn((prevTurn) => {
      const localNewTurn = prevTurn + 1;
      newTurn = localNewTurn;
      return localNewTurn;
    });

    setUsedKeys((prevUsedKeys) => {
        const newKeys = { ...prevUsedKeys };

        formattedGuess.forEach((letter) => {
            const currentColor = newKeys[letter.key];
            
            if (letter.color === COLOR_CHECK_ENUM.GREEN) {
                newKeys[letter.key] = COLOR_CHECK_ENUM.GREEN;
                return;
            }

            if (letter.color === COLOR_CHECK_ENUM.YELLOW && currentColor !== COLOR_CHECK_ENUM.GREEN) {
                newKeys[letter.key] = COLOR_CHECK_ENUM.YELLOW;
                return;
            }

            if (letter.color === COLOR_CHECK_ENUM.GREY && currentColor !== COLOR_CHECK_ENUM.GREEN && currentColor !== COLOR_CHECK_ENUM.YELLOW) {
                newKeys[letter.key] = COLOR_CHECK_ENUM.GREY;
                return;
            };
        });
        
        return newKeys;
    });
    setCurrentGuess('');

    addWordAction(getGameStateInfo({ 
      localGuesses: newFormattedGuesses, 
      localHistory: newHistory, 
      localTurn: newTurn 
    }));
  };

  const handleKeyUp = useCallback(({ key }) => {
    if (key === 'Enter') {
      if (currentGuess.length === 0) return;
      if (turn > numberOfLifes) return;
      if (history.includes(currentGuess)) return;
      if (!POSSIBLE_POKEMONS.includes(currentGuess)) return;
      
      if (turn === 0) handleNewGame();

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
      return;
  }

  if (key === 'Backspace') {
      if (currentGuess.length >= 1) {
          setCurrentGuess((prev) => prev.slice(0, -1));
      }
      return;
  }

  if (/^[A-Za-z]$/.test(key)) setCurrentGuess((prev) => prev + _.lowerCase(key));

  }, [currentGuess, history, numberOfLifes, turn]);
  
  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyUp
  };
}; 

export default useGame;