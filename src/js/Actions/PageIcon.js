import { createAction } from 'redux-actions';

import { SHOW, HIDE } from 'Constants/ActionTypes/PageIcon';

export const pageIconShow = createAction(SHOW);
export const pageIconHide = createAction(HIDE);
