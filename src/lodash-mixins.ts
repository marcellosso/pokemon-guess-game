import * as _ from 'lodash';

import sleep from './helpers/mixins';

interface ILoDashMixins extends _.LoDashStatic {
  sleep<T>(ms:T): Promise<void>;
}

_.mixin({sleep});

export default <ILoDashMixins><unknown>_;