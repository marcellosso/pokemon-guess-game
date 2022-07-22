import { POKEMON_TYPE_ENUM } from '../enums';

export type PokemonDataType = {
  number: number;
  name: string;
  type: POKEMON_TYPE_ENUM;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}