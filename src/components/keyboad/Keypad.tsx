/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { BsBackspace, BsBackspaceFill } from "react-icons/bs";

import _ from 'lodash';

import { IKandleKeyUp, UsedKeysType } from '../../types';
import Key from './Key';

import './styles.css';

interface IKeypad {
  usedKeys: UsedKeysType,
  addNewKey: (_k: IKandleKeyUp) => void
}

const Keypad : FC<IKeypad> = ({ usedKeys, addNewKey }) : JSX.Element => (
    <div className="keypad">
      {
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => {
          const lowerCaseLetter = _.lowerCase(letter);
          const color = usedKeys[lowerCaseLetter];

          return (
            <Key
              letter={letter}
              color={color}
              addNewKey={() => addNewKey({ key: lowerCaseLetter })}
            />
          );
        })
      }

      {
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter) => {
          const lowerCaseLetter = letter.toLowerCase();
          const color = usedKeys[lowerCaseLetter];

          return (
            <Key
              letter={letter}
              color={color}
              addNewKey={() => addNewKey({ key: lowerCaseLetter })}
            />
          );
        })
      }

      <div
        onClick={() => addNewKey({ key: 'Backspace' })}
        className='key keyIcon'
        id='keyBackspace'
        tabIndex={0}
        role='button'
      >
        <BsBackspaceFill 
          color="#D9D9D991"
          style={{
            position: 'absolute',
            zIndex: -1
          }}
          />
        <BsBackspace
          color="#000"
        />
      </div>
      
      {
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter) => {
          const lowerCaseLetter = letter.toLowerCase();
          const color = usedKeys[lowerCaseLetter];

          return (
            <Key
              letter={letter}
              color={color}
              addNewKey={() => addNewKey({ key: lowerCaseLetter })}
            />
          );
        })
      }

      <Key
        letter='Enter'
        addNewKey={() => addNewKey({ key: 'Enter' })}
        customId='keyEnter'
      />

    </div>
);

export default Keypad;