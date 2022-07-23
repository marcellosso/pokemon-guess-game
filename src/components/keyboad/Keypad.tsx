import React, { FC } from 'react';

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

      <br />

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

      <br />

      <Key
        letter='ENTER'
        addNewKey={() => addNewKey({ key: 'Enter' })}
        customStyle={{ width: 60 }}
      />
      
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
        letter='Backspace'
        addNewKey={() => addNewKey({ key: 'Backspace' })}
        customStyle={{ width: 60 }}
      />
    </div>
);

export default Keypad;