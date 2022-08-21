/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';

import { COLOR_CHECK_ENUM } from '../../enums';

interface IKey {
  letter: string | JSX.Element,
  addNewKey: () => void,
  color?: COLOR_CHECK_ENUM,
  customStyle?: React.CSSProperties
  customId?: string
}

const Key : FC<IKey> = ({ letter, color, addNewKey, customStyle, customId }) : JSX.Element => (
  <div
    onClick={addNewKey}
    className={`${color} key ${letter === 'Z' ? 'keyZ' : ''}`}
    style={customStyle}
    id={customId}
  >
    {letter}
  </div>
);
  
  export default Key;