document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click',
    onclick, false)
    
    function onclick () {
        // chrome.tabs.getSelected(null,
        chrome.tabs.query({currentWindow: true, active: true}, 
            function (tabs) {
                chrome.tabs.sendMessage(tabs.id[0], 'hi', setCount) // tabs.id
                //respond activates setCount function
            }
        )
    }

    function setCount (res) {
        // alert(res.count)
        const div = document.createElement('div')
        div.textContent = `${res.count} bears`
        // res.count coming from content.js
        document.body.appendChild(div)
    }
}, false)