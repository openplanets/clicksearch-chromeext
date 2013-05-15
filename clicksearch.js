// The onClicked callback function.
function onClickHandler(info, tab) {
  var url = "http://riddleit.com/clicksearch/getdata.php";
	var data = "term=" + info.selectionText;
	$.get(url, data, function(data) {
	alert(data);
});
};
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    var title = "Check Web Archive";
    var id = chrome.contextMenus.create({"title": title, "contexts":["selection"],
                                         "id": "context-selection"});
});

