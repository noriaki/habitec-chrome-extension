const toggleIcon = (action, sender) => {
  const method = tabs => chrome.pageAction[action](tabs[0].id);
  return sender.tab ? method([sender.tab]) : chrome.tabs.query({
    active: true, currentWindow: true }, method);
};

chrome.runtime.onMessage.addListener((action, sender) => {
  switch (action.type) {
  case 'icon/show':
    toggleIcon('show', sender);
    break;
  case 'icon/hide':
    toggleIcon('hide', sender);
    break;
  default:
    break;
  }

  return true;
});

chrome.pageAction.onClicked.addListener(tab => console.log(tab));
