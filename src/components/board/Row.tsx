import React, { FC, useMemo } from 'react';

import _ from '../../lodash-mixins';
import { IGuesses } from '../../types';

interface IRow {
  currentTurn?: number
  currentGuess?: string, 
  guess?: IGuesses[], 
  isCorrect?: boolean,
}

const Row : FC<IRow> = ({ currentTurn, guess, currentGuess, isCorrect }) : JSX.Element=> {
  const emptyLettersAmount = useMemo(() => currentTurn === 0 ? 1 : 10, [currentTurn]);

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
          {[...Array(10 - guess.length)].map((g, i) => (
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

        {
          emptyLettersAmount === 1 ?
          letters.length <= 9 && ( <div className='empty' /> ) :
          [...Array(emptyLettersAmount - letters.length)].map((l, i) => (
            <div key={i} className='empty' />
          ))
        }

      </div>
    );
  }

  return (
    <div className='row'>
      {
        [...Array(emptyLettersAmount)].map(() => (
          <div className='empty' />
        ))
      }
    </div>
  );
};

export default Row;