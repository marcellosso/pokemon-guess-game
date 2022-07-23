import { 
  COLOR_CHECK_ENUM,
  POKEMON_TYPE_ENUM
} from '../enums';

export interface IGuesses {
  key: string;
  color: string;
}
export interface IKandleKeyUp {
  key: string
}

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

export type UsedKeysType = {[key: string]: COLOR_CHECK_ENUM}

export type GamePropsType = {
  turn: number;
  currentGuess: string;
  guesses: IGuesses[][];
  history: string[];
  isCorrect: boolean;
  usedKeys: UsedKeysType;
}
