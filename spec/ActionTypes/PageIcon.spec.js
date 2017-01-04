import { expect } from 'chai';

import { SHOW, HIDE } from 'Constants/ActionTypes/PageIcon';

describe('Redux Standard', () => {
  describe('ActionTypes', () => {
    describe('PageIcon', () => {
      it('SHOW', () => {
        expect(SHOW).to.equal('/page-icon/SHOW');
      });

      it('HIDE', () => {
        expect(HIDE).to.equal('/page-icon/HIDE');
      });
    });
  });
});
