chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  var url = "http://riddleit.com/clicksearch/getdata.php";
	var data = "term=" + request.info.selectionText;
	$.ajax({url: url, data: data, dataType : "json", success : success});
  });
  
  function success(retVal) {
	var popup = $('<div>');
	var list = $('<ul>');
	jQuery.each(retVal, function(index, value) {
			var listItem = $('<li>' + value.url + '<br/>' + value.context + '</li>');
			list.append(listItem);
		});
	popup.append(list);
	$("body").append(popup);
  }
