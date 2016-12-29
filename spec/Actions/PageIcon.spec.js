import { expect } from 'chai';

import { SHOW, HIDE } from 'Constants/ActionTypes/PageIcon';
import { pageIconShow, pageIconHide } from 'Actions/PageIcon';

describe('Redux Standard', () => {
  describe('Actions', () => {
    describe('PageIcon', () => {
      it('Show', () => {
        expect(pageIconShow())
          .to.deep.equal({
            type: SHOW,
          });
      });

      it('Hide', () => {
        expect(pageIconHide())
          .to.deep.equal({
            type: HIDE,
          });
      });

      context('error occurred', () => {
        it('Show', () => {
          const subject = pageIconShow(new Error('test'));
          expect(subject.error).to.be.true;
          expect(subject.type).to.equal(SHOW);
        });

        it('Hide', () => {
          const subject = pageIconHide(new Error('test'));
          expect(subject.error).to.be.true;
          expect(subject.type).to.equal(HIDE);
        });
      });
    });
  });
});
