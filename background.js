window.bears = {}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    window.bears[request.url] = request.count
    // alert(window.bears)
    // console.log(window.bears)
})

chrome.browserAction.onClicked.addListener(function(tab) {
    // deleted "default_popup": "popup.html" from manifest
    chrome.tabs.create({url: 'popup.html'}) // needs tabs permissions
})