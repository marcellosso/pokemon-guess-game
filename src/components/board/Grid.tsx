import React, { FC } from 'react';

import { IGuesses } from '../../types';
import Row from './Row';

interface IGrid {
  currentGuess: string, 
  guesses: IGuesses[][], 
  turn: number,
  isCorrect: boolean,
  solutionSize: number
}

const Grid : FC<IGrid> = ({ currentGuess, guesses, turn, isCorrect, solutionSize }) : JSX.Element => (
    <div>
        {guesses.map((guess, index) => {
            if (turn === index) {
                return <Row key={index} currentGuess={currentGuess} solutionSize={solutionSize} />;
            }
            if (isCorrect && (turn === 6 || !guesses[index + 1]) ) {
                return <Row key={index} guess={guess} isCorrect={isCorrect} />;
                
            }
            return <Row key={index} guess={guess} />;
        })}
    </div>
);

export default Grid;