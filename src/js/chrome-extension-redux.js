import merge from 'lodash/merge';

export const dispatch = action => (
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(action, (response) => {
      const e = chrome.runtime.lastError;
      if (e) { reject(e); }
      resolve(response);
    });
  })
);

export const mapSenderToActionMeta = (action, sender) => (
  merge({}, action, { meta: { sender } })
);
