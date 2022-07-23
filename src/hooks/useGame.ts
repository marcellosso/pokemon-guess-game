import { useState } from 'react';

import _ from 'lodash';

import { COLOR_CHECK_ENUM } from '../enums';
import { IGuesses, IKandleKeyUp, PokemonDataType, UsedKeysType } from '../types';

const useGame = (pokemon: PokemonDataType) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<IGuesses[][]>([ ...Array(6) ]);
  const [history, setHistory] = useState<string[]>([]);

  const [isCorrect, setIsCorrect] = useState(false);

  // { a: 'green', b: 'yellow', c: 'grey' }
  const [usedKeys, setUsedKeys] = useState({} as UsedKeysType);

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
    if (currentGuess === pokemon.name) {
        setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses];
        newGuesses[turn] = formattedGuess;
        return newGuesses;
    });

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

            if (letter.color === COLOR_CHECK_ENUM.GREY && currentColor !== COLOR_CHECK_ENUM.GREEN && currentColor !== 'yellow') {
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
        // Check if game not over
        /* TODO Refactor to not allow any interactions 
         * with text once the game is over */
        if (turn > 5) return;
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