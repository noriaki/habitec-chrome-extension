import { createStore } from 'redux';
import pageIconReducer from 'Reducers/PageIcon';
import { addMetaToAction, extractTabId } from 'chrome-extension-redux';

const store = createStore(pageIconReducer);
store.subscribe(() => console.log(store.getState()));

chrome.runtime.onMessage.addListener((action, sender) => {
  const tabId = extractTabId(sender);
  store.dispatch(addMetaToAction(action, { tabId }));

  return true;
});

chrome.pageAction.onClicked.addListener(tab => console.log(tab));
