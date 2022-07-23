import React from 'react';

import './styles.css';

interface IModal {
  turn: number,
  isCorrect: boolean,
  solution: string
}

const Modal = ({ isCorrect, turn, solution } : IModal) => (
  <div className='modal'>
    {
      isCorrect && (
        <div>
          <h1>You Ganhou!</h1>
          <p className='solution'>{solution}</p>
          <p>You achou the solution em {turn} tentativas :D</p>
        </div>
      )
    }
    {
      !isCorrect && (
        <div>
          <h1>You Perdeu!</h1>
          <p className='solution'>{solution}</p>
          <p>Melhor luck next vez :D</p>
        </div>
      )
    }
  </div>
);
      
export default Modal;