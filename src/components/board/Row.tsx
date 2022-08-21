import React, { FC } from 'react';

import { IGuesses } from '../../types';

interface IRow {
  currentGuess?: string, 
  guess?: IGuesses[], 
  isCorrect?: boolean
}

const Row : FC<IRow> = ({ guess, currentGuess, isCorrect }) : JSX.Element=> {
  const getRowCss = () => {
    if (isCorrect !== undefined) {
      if (isCorrect) return 'correct';
      return 'incorrect';
    }
    return '';
  };

  if (guess) {
    return (
      <div className={ `row past ${getRowCss()}`}>
        {guess.map((letter, index) => (
          <div key={index} className={letter.color}>
            {letter.key}
          </div>
        ))}
          {[...Array(10 - guess.length)].map((_, i) => (
            <div key={i} className='empty' />
        ))}
      </div>
    );
}

  if (currentGuess) {
    const letters = currentGuess.split('');

    return (
      <div className='row current'>
        {letters.map((letter, index) => (
          <div key={index} className='filled'>{letter}</div>
        ))}
        {[...Array(10 - letters.length)].map((_, i) => (
          <div key={i} className='empty' />
        ))}
      </div>
    );
  }

  return (
    <div className='row'>
      {
        [...Array(1)].map(() => (
          <div className='empty' />
        ))
      }
    </div>
  );
};

export default Row;