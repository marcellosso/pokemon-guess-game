/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';

import { COLOR_CHECK_ENUM } from '../../enums';

interface IKey {
  letter: string,
  addNewKey: () => void,
  color?: COLOR_CHECK_ENUM,
  customStyle?: React.CSSProperties
}

const Key : FC<IKey> = ({ letter, color, addNewKey, customStyle }) : JSX.Element => (
  <div
    onClick={addNewKey}
    className={`${color} key`}
    style={customStyle}
  >
    {letter}
  </div>
);
  
  export default Key;