import React from 'react';

import FirstGenEasy from './FirstGenEasy';
import { FirstGenEasyContextProvider } from './FirstGenEasyContext';

const FirstGenEasyIndex = () => (
  <FirstGenEasyContextProvider >
    <>
      <div className="bg-pokemon" />
      <div className="content">
        <FirstGenEasy />
      </div>
    </>
  </FirstGenEasyContextProvider>
);

export default FirstGenEasyIndex;