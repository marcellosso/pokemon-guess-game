import { PokemonDataType } from '../types';

const getPokemonIndexByDay = (gameStartDate: Date, pokemonData: PokemonDataType[]) => {
  const timeDiff = new Date().getTime() - gameStartDate.getTime();
  return Math.floor(Math.abs(timeDiff / (1000 * 3600 * 24))) % pokemonData.length;
};

// eslint-disable-next-line import/prefer-default-export
export { getPokemonIndexByDay };