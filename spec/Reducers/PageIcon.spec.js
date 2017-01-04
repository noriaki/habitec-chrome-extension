import { expect } from 'chai';

import pageIconReducer, { initialState } from 'Reducers/PageIcon';
import { pageIconShow, pageIconHide } from 'Actions/PageIcon';
import { addMetaToAction } from 'chrome-extension-redux';

describe('Redux Standard', () => {
  describe('Reducers', () => {
    describe('PageIcon', () => {
      it('Initial state', () => {
        expect(pageIconReducer(undefined, { type: '__test__' }))
          .to.deep.equal(initialState);
      });

      it('must pass `meta: { sender }` from action', () => {
        const subject = action => () => pageIconReducer(initialState, action);
        expect(subject(pageIconShow())).to.throw(TypeError);
        expect(subject(pageIconHide())).to.throw(TypeError);
      });

      it('Show', () => {
        const action = addMetaToAction(pageIconShow(), { tabId: 1 });
        expect(pageIconReducer(initialState, action))
          .to.deep.equal({ display: 'show', tabId: 1 });
      });

      it('Hide', () => {
        const action = addMetaToAction(pageIconHide(), { tabId: 1 });
        expect(pageIconReducer(initialState, action))
          .to.deep.equal({ display: 'hide', tabId: 1 });
      });
    });
  });
});
