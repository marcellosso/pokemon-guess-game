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

export type UsedKeysType = {[key: string]: COLOR_CHECK_ENUM}

export type GamePropsType = {
  turn: number;
  currentGuess: string;
  guesses: IGuesses[][];
  history: string[];
  isCorrect: boolean;
  usedKeys: UsedKeysType;
}

export type TimeStatsType = { avgTime: number, minTime: number, maxTime: number }
export interface IConfigPokeStats {
  gamesPlayed: number,
  gamesWon: number,
  winStreak: number,
  lastGameWon: number,
  timeStats: TimeStatsType,
  catchGraph: number[]
}
export interface IConfigPokeMeta { 
  startTime: number,
  endTime: number,
  day: number,
  win: boolean,
}

export interface IConfigPokeState { 
  pokemonStats: PokemonDataType
  formattedGuesses: IGuesses[][],
  history: string[],
  turn: number
}

export type PokemonDataType = {
  number: number;
  name: string;
  type?: POKEMON_TYPE_ENUM;
  generation?: number;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}