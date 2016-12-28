import { expect } from 'chai';

import { SHOW, HIDE } from 'Constants/ActionTypes/PageIcon';
import { pageIconShow, pageIconHide } from 'Actions/PageIcon';

describe('Redux Standard', () => {
  describe('Actions', () => {
    describe('PageIcon', () => {
      it('Show', () => {
        expect(pageIconShow({ test: 'test' }))
          .to.deep.equal({
            type: SHOW,
            meta: { sender: { test: 'test' } },
          });
      });

      it('Hide', () => {
        expect(pageIconHide({ test: 'test' }))
          .to.deep.equal({
            type: HIDE,
            meta: { sender: { test: 'test' } },
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
