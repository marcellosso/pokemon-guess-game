import React, { useState } from 'react';

import _ from 'lodash';

import useCancelModal from '../../hooks/useCancelModal';
import { IGuesses, PokemonDataType } from '../../types';
import './styles.css';
import AlertMessage from '../alert-message';

interface IModal {
  turn: number,
  isCorrect: boolean,
  currentDay: number,
  currentWinstreak: number,
  guesses: IGuesses[][],
  pokemon: PokemonDataType,
  setOpenModal: (_b: boolean) => void,

  showGeneration?: boolean,
}

const Modal = ({ 
  isCorrect, 
  turn, 
  pokemon, 
  guesses, 
  currentDay,
  currentWinstreak,
  setOpenModal,
  showGeneration = false } : IModal) => {

  const onEscapePressed = useCancelModal(setOpenModal);

  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
  const pokemonImg = require(`../../config/assets/${pokemon.number}.png`);

  const [ scoreCardGenerated, setScoreCardGenerated ] = useState(false);
  
  const normalizeGuesses = () => {
    const sortedGuesses = _.orderBy(guesses, (guess) => guess.length, ['desc']);
    const longestGuessLength = sortedGuesses[0].length;

    const normalizedGuesses = guesses.map((guess) => {
      if (_.isEmpty(guess)) return guess;
      if (guess.length === longestGuessLength) return guess;

      const newGuess = [...guess];
      const remainingChars = longestGuessLength - guess.length;

      [...Array(remainingChars)].forEach(() => newGuess.push({ key: 'noInput', color: '' }));

      return newGuess;
    });

    return normalizedGuesses;
  };

  const generateScoreCard = async (e: any) => {
    e.stopPropagation();
    const windowLocation = window.location;
    const currentUrl = windowLocation.host; 

    let result = `Joguei Pokemon Guess ${currentUrl}\n#${currentDay} ⚾${turn} 🔥${currentWinstreak}\n\n`;

    const normalizedGuesses = normalizeGuesses();

    normalizedGuesses.forEach((guess) => {
      const guessOutput = [...guess].reduce((prev, curr) => {
        if (curr.key === 'noInput') return `${prev }❌`;
        if (curr.color.includes('green')) return `${prev  }🟩`;
        if (curr.color.includes('yellow')) return `${prev  }🟨`;
        return `${prev  }⬛`;
      }, '');
      result += `${guessOutput}\n`;
    });

    await navigator.clipboard.writeText(result);
    setScoreCardGenerated(true);
  };

  return (
    <div 
      className='modal'
      onClick={(e) => {
        e.stopPropagation(); 
        setOpenModal(false);
      }}
      onKeyDown={onEscapePressed}
      role='button'
      tabIndex={0}
    >
      
      <div className='mainContainer'>
        {
          isCorrect && (
            
            <>
              <h1 className='mainH1'>{pokemon.name} captured!</h1>
              <h3>You have captured it in {turn} attempts &#9787;</h3>
              <img 
                src={pokemonImg} 
                alt={`Pokemon - ${pokemon.name}`}
              />
              <p>Type: {pokemon.type}</p>
              <p>HP: {pokemon.hp}</p>
              <p>Attack: {pokemon.attack}</p>
              <p>Defense: {pokemon.defense}</p>
              <p>Speed: {pokemon.speed}</p>
              <p>Height (m): {pokemon.height}</p>
              <p>Weight: (kg): {pokemon.weight}</p>
              { showGeneration && <p>Gen: {pokemon.generation}</p> }
            </>
          )
        }
        {
          !isCorrect && (
            
            <>
              <h1 className='mainH1'>{pokemon.name} escaped!</h1>
              <img 
                src={pokemonImg} 
                alt={`Pokemon - ${pokemon.name}`}
              />
              <p>Type: {pokemon.type}</p>
              { showGeneration && <p>Gen: {pokemon.generation}</p> }
            </>
          )
        }

        {
          scoreCardGenerated && (
            <AlertMessage 
              message="Result is copied to clipboard"
              setCloseAlert={() => setScoreCardGenerated(false)}
            />
          )
        }

        <button type='button' onClick={(e) => generateScoreCard(e)} >
          Share results
        </button>
      </div>
    </div>
  );
};
      
export default Modal;