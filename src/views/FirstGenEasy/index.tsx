import React from 'react';

import FirstGenEasy from './FirstGenEasy';
import { FirstGenEasyContextProvider } from './FirstGenEasyContext';

const FirstGenEasyIndex = () => (
  <FirstGenEasyContextProvider >
    <FirstGenEasy />
  </FirstGenEasyContextProvider>
);

export default FirstGenEasyIndex;