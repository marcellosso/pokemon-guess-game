import React from 'react';

import useCancelModal from '../../hooks/useCancelModal';
import { IConfigPokeStats } from '../../types';

import './styles.css';

interface IPlayerCard {
  setOpenPlayerCard: (_o: boolean) => void,
  playerStats: IConfigPokeStats
}

const PlayerCard = ({ setOpenPlayerCard, playerStats } : IPlayerCard) => {
  const onEscapePressed = useCancelModal(setOpenPlayerCard);

  return (
    <div 
      className='playerCard'
      onClick={(e) => {
        e.stopPropagation(); 
        setOpenPlayerCard(false);
      }}
      onKeyDown={onEscapePressed}
      role='button'
      tabIndex={0}
    >
          <div className='mainContainer'>
            <h1 className='mainH1'>Player Card</h1>
          
            <h4>General</h4>
            <p>Games Played: {playerStats.gamesPlayed}</p>
            <p>Games Won: {playerStats.gamesWon}</p>
            <p>Current Win Streak: {playerStats.winStreak}</p>
            <p>Last Game Won: {playerStats.lastGameWon}</p>

            <h4>Time Stats</h4>
            <p>Average Time: {playerStats.timeStats.avgTime}</p>
            <p>Min Time: {playerStats.timeStats.minTime}</p>
            <p>Max Time: {playerStats.timeStats.maxTime}</p>

            <h4>Catch Graph</h4>
            <p>1: {playerStats.catchGraph[0]}</p>
            <p>2: {playerStats.catchGraph[1]}</p>
            <p>3: {playerStats.catchGraph[2]}</p>
            <p>4: {playerStats.catchGraph[3]}</p>
            <p>5: {playerStats.catchGraph[4]}</p>

          </div>
    </div>
  );};
      
export default PlayerCard;