import { GAME_START_DATE } from '../config/config';
import { PokemonDataType } from '../types';

// 864e5 = Number of milliseconds on a day (Same as 1000 * 3600 * 24)

const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const getPokemonIndexByDay = (pokemonData: PokemonDataType[]) => {
  const gameStartDate = new Date(GAME_START_DATE);
  const timeDiff = getToday().getTime() - gameStartDate.getTime();

  // Leaving the legacy code if needed on future
  // return Math.floor(Math.abs(timeDiff / 864e5)) % pokemonData.length; 

  // Not divinding makes the order of pokemons be random and unpredictable
  return Math.abs(timeDiff) % pokemonData.length;
};

const getDayDifference = (date: Date) : number => {
  const today = new Date();
  const difference = today.getTime() - date.getTime();
  const daysDifference = Math.ceil(difference / 864e5);

  return daysDifference;
};

export { getPokemonIndexByDay };
export { getDayDifference };