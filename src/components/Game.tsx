import React, { FC, useCallback, useEffect, useState } from 'react';

import _ from '../lodash-mixins';
import { PokemonDataType } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const IMG = require("./1.png");

interface IGameProps {
  pokemon: PokemonDataType 
}

const Game : FC<IGameProps> = ({ pokemon }) : JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>Solution - {pokemon.name}</div>
      <img src={IMG} alt="Pokemon silhouette" />
    </div>
  );
};

export default Game;