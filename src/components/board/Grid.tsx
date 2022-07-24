import React, { FC } from 'react';

import { IGuesses } from '../../types';
import Row from './Row';

import './styles.css';

interface IGrid {
  currentGuess: string, 
  guesses: IGuesses[][], 
  turn: number,
  isCorrect: boolean
  numberOfLifes: number
}

const Grid : FC<IGrid> = ({ currentGuess, guesses, turn, isCorrect, numberOfLifes }) : JSX.Element => (
        <div>
            {guesses.map((guess, index) => {
                if (turn === index) {
                    return <Row key={index} currentGuess={currentGuess} />;
                }
                if (
                    (isCorrect && (turn === numberOfLifes || (guesses[index + 1]) && guesses[index + 1].length === 0) ) ||
                    index === numberOfLifes
                ) {
                    return <Row key={index} guess={guess} isCorrect={isCorrect} />;
                    
                }
                return <Row key={index} guess={guess} />;
            })}
        </div>
    );

export default Grid;