// alert("grr")

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     const re = new RegExp('bear','gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     // alert(matches.length)
//     sendResponse({count: matches.length})
// })

const re = new RegExp('bear','gi')
const matches = document.documentElement.innerHTML.match(re)
// alert(matches.length)
chrome.runtime.sendMessage({
    url:window.location.href,
    count: matches.length
})