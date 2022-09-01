/* eslint-disable react/self-closing-comp */
import React, { FC } from 'react';

import BulbaIcon from '../custom-icons/BulbaIcon';
import CharmanderIcon from '../custom-icons/CharmanderIcon';
import HelpIcon from '../custom-icons/HelpIcon';
import PikachuIcon from '../custom-icons/PikachuIcon';
import SettingsIcon from '../custom-icons/SettingsIcon';

import './styles.css';

interface IGameTitle {
  setOpenTutorial: (_o: boolean) => void
}

const GameTitle : FC<IGameTitle> = ({ setOpenTutorial }) => (
    <div className='container'>
      <div className="levelsNavbar">
        {/* <PikachuIcon />
        <CharmanderIcon />
        <BulbaIcon /> */}
        <p>First Gen</p>
        <p>First Gen (Hard)</p>
        <p>All Gens</p>
      </div>
      <div className='containerBackground'>
        <div className="backgroundOptions">
          <h1>Quem é esse Pokemon?</h1>
        </div>
      </div>
      <div className="helpNavbar">
        <button 
          type='button' 
          className='helpIconsButton'
          id='helpIcon'
          onClick={(e) => {
            e.stopPropagation(); 
            setOpenTutorial(true);
          }} 
        >
          <HelpIcon />
        </button>
        {/* TODO Add settings options */}
        {/* <button 
          type='button' 
          className='helpIconsButton'
          onClick={(e) => {
            e.stopPropagation(); 
          }} 
        >
          <SettingsIcon />
        </button> */}
      </div>
    </div>
  );

export default GameTitle;