import React, { FC } from 'react';

import { IGuesses } from '../../types';

interface IRow {
  currentGuess?: string, 
  guess?: IGuesses[], 
  isCorrect?: boolean,
  solutionSize?: number
}

const Row : FC<IRow> = ({ guess, currentGuess, isCorrect, solutionSize }) : JSX.Element=> {
  if (guess) {
    return (
        <div className={`row past ${isCorrect ? 'correct' : ''}`}>
            {guess.map((letter, index) => (
                <div key={index} className={letter.color}>
                    {letter.key}
                </div>
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
            {[...Array((solutionSize as number) - letters.length)].map((_, i) => (
                <div key={i} />
            ))}
        </div>
    );
}

return (
    <div className='row'>
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
};

export default Row;