import * as pokemon from './pokemons';

const START_DATE = new Date('19 Jun 2022');

const defaultPokeMeta = {
  startTime: 1658552015683,
  endTime: null,
  day: 0,
  gameOver: true,
  win: false,
};

const defaultPokeState = {
  pokemon: '',
  pokemonId: 0,
  pokemonStats: {
    type: null,
    height: 0,
    weight: 0,
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0
  },
  formattedGuesses: [[{ key: 'T', color: 'green' }, { key: 'R', color: 'grey' }, { key: 'Y', color: 'yellow' }], []],
  history: ['TRY'],
  turn: 1
};

const defaultGameAttributes = {
  turn: 0,
  currentGuess: '',
  guesses: [ ...Array(1) ],
  history: [],
  isCorrect: false,
  usedKeys: {}
};

export { START_DATE };
export { pokemon };
export { defaultPokeMeta };
export { defaultPokeState };
export { defaultGameAttributes };