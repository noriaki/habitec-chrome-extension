import { handleActions } from 'redux-actions';

import { pageIconShow, pageIconHide } from 'Actions/PageIcon';

export const initialState = {};

export default handleActions({
  [pageIconShow]: {
    next(state, { meta: { tabId } }) {
      return { ...state, display: 'show', tabId };
    },
    throw(state) { return state; },
  },
  [pageIconHide]: {
    next(state, { meta: { tabId } }) {
      return { ...state, display: 'hide', tabId };
    },
    throw(state) { return state; },
  },
}, initialState);
