import { PokemonDataType } from '../types';

const getPokemonIndexByDay = (gameStartDate: Date, pokemonData: PokemonDataType[]) => {
  const timeDiff = new Date().getTime() - gameStartDate.getTime();
  return Math.floor(Math.abs(timeDiff / (1000 * 3600 * 24))) % pokemonData.length;
};

const getDayDifference = (date: Date) : number => {
  const today = new Date();
  const difference = today.getTime() - date.getTime();
  const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));

  return daysDifference;
};

export { getPokemonIndexByDay };
export { getDayDifference };