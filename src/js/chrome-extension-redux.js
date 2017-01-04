import merge from 'lodash/merge';
import isArray from 'lodash/isArray';

export const dispatch = action => (
  chrome.runtime.sendMessage(action, () => {
    const e = chrome.runtime.lastError;
    if (e) { console.error(e); }
  })
);

export const addMetaToAction = (action, meta) => merge({}, action, { meta });

const findActiveTab = () => (
  new Promise((resolve, reject) => (
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (isArray(tabs) && tabs[0] != null) { resolve(tabs[0].id); }
      reject(null);
    })
  ))
);

export const extractTabId = (sender) => {
  if (sender.tab != null) { return sender.tab.id; }
  return null;
};
