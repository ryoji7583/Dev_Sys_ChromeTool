window.onload = function() {
  chrome.tabs.getSelected(window.id, function (tab) {
    //tab.urlに開いているタブのURLが入っている
    var url = document.createTextNode(tab.url);
    document.getElementById('url').appendChild(url); 
  });
};

