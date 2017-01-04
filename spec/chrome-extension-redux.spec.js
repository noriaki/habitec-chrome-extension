import { expect } from 'chai';

import { addMetaToAction, extractTabId } from 'chrome-extension-redux';

describe('chrome-extension-redux', () => {
  describe('#extractTabId', () => {
    context('sender from content-scripts', () => {
      it('return sender.tab.id', () => {
        expect(extractTabId({ tab: { id: 1 } })).to.equal(1);
      });
    });
  });

  describe('#addMetaToAction', () => {
    it('return adding `meta: params`', () => {
      expect(addMetaToAction({}, { tabId: 1 }))
        .to.deep.equal({ meta: { tabId: 1 } });
    });
  });
});
