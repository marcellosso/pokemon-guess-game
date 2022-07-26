import { POKEMON_TYPE_ENUM } from '../enums';
import _ from '../lodash-mixins';
import { IConfigPokeMeta, IConfigPokeState, IConfigPokeStats, IGuesses, PokemonDataType } from '../types';
import allGenPokemon from './allGenPokemon';
import firstGenPokemon from './firstGenPokemons';

const START_DATE = new Date('19 Jun 2022');
const POSSIBLE_POKEMONS = allGenPokemon.map((pokemon) => _.lowerCase(pokemon.name));

// DEFAULT LOCAL STORAGE VALUES

const defaultPokeMetaLS = {
  startTime: 0,
  endTime: 0,
  day: 0,
  win: false,
} as IConfigPokeMeta;

const defaultPokeStateLS = {
  formattedGuesses: [[]] as unknown as IGuesses[][],
  history: [],
  turn: 0
} as IConfigPokeState;

const defaultCapturedPokeStatsLs = [] as PokemonDataType[];

const defaultPokeStatsLS = (numberOfLifes: number) : IConfigPokeStats => {
  const defaultCatchGraph = new Array(numberOfLifes).fill(0);
  
  return {
    gamesPlayed: 0,
    gamesWon: 0,
    winStreak: 0,
    lastGameWon: 0,
    timeStats: {
      avgTime: 0,
      minTime: 0,
      maxTime: 0
    },
    catchGraph: [...defaultCatchGraph]
  }; 
} ;

// Default Game Attributes

const defaultGameAttributes = {
  turn: 0,
  currentGuess: '',
  guesses: [ ...Array(1) ],
  history: [],
  isCorrect: false,
  usedKeys: {}
};

export { START_DATE };

export { firstGenPokemon };
export { allGenPokemon };
export { POSSIBLE_POKEMONS };

export { defaultPokeMetaLS };
export { defaultPokeStateLS };
export { defaultCapturedPokeStatsLs };
export { defaultPokeStatsLS };

export { defaultGameAttributes };