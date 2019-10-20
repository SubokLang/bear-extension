document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector('button').addEventListener('click',
    // onclick, false)
    
    // function onclick () {
    //     // chrome.tabs.getSelected(null,
    //     chrome.tabs.query({currentWindow: true, active: true}, 
    //         function (tabs) {
    //             chrome.tabs.sendMessage(tabs.id[0], 'hi', setCount) // tabs.id
    //             //respond activates setCount function
    //         }
    //     )
    // }

    // function setCount (res) {
    //     // alert(res.count)
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count} bears`
    //     // res.count coming from content.js
    //     document.body.appendChild(div)
    // }

    const bg = chrome.extension.getBackgroundPage()
    // coming from background.js window.bears
    // alert(bg)
    console.log(bg)
    Object.keys(bg.bears).forEach(function(url) {
        const div = document.createElement('div')
        div.textContent = `${url}: ${bg.bears[url]}`
        document.body.appendChild(div)
    })
}, false)