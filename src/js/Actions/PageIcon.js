import { createActions } from 'redux-actions';

import * as types from 'Constants/ActionTypes/PageIcon';

const payloadAndMetaCreaters = [
  _ => undefined,
  sender => ({ sender }),
];

export default createActions({
  [types.SHOW]: payloadAndMetaCreaters,
  [types.HIDE]: payloadAndMetaCreaters,
});
