// The onClicked callback function.
function onClickHandler(info, tab) {
	chrome.tabs.sendMessage(tab.id, {info : info});
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    var title = "Check Web Archive";
    var id = chrome.contextMenus.create({"title": title, "contexts":["selection"],
                                         "id": "context-selection"});
});
