import { useEffect, useState } from 'react';

import _ from 'lodash';

import { COLOR_CHECK_ENUM } from '../enums';
import { GamePropsType, IGuesses, IKandleKeyUp, PokemonDataType } from '../types';

const useGame = (pokemon: PokemonDataType, numberOfLifes: number, gameProps : GamePropsType) => {
  const [turn, setTurn] = useState(gameProps.turn);
  const [currentGuess, setCurrentGuess] = useState(gameProps.currentGuess);
  const [guesses, setGuesses] = useState<IGuesses[][]>(gameProps.guesses);
  const [history, setHistory] = useState<string[]>(gameProps.history);

  const [isCorrect, setIsCorrect] = useState(gameProps.isCorrect);

  // { a: 'green', b: 'yellow', c: 'grey' }
  const [usedKeys, setUsedKeys] = useState(gameProps.usedKeys);

  useEffect(() => {
    console.log('uss');
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

  const addNewGuess = (formattedGuess : IGuesses[]) => {
    setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses];
        newGuesses[turn] = formattedGuess;

        if (turn < numberOfLifes) newGuesses.push([]);
        
        return newGuesses;
    });

    if (currentGuess === pokemon.name) setIsCorrect(true);

    setHistory((prevHistory) => [...prevHistory, currentGuess]);

    setTurn((prevTurn) => prevTurn + 1);

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
  };

  const handleKeyUp = ({ key } : IKandleKeyUp) => {
    if (key === 'Enter') {
        if (turn > numberOfLifes) return;
        if (history.includes(currentGuess)) return;

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
    
};

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