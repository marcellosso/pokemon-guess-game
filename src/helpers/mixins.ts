/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

// _.mixin({ sleep }, { chain: false });

export default sleep;