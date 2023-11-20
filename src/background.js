chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.tabs.query({}).then((tabs) => {
    console.log(tabs);
    sendResponse(tabs.length);
  });
  return true;
});
