console.log("Chrome extension go");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "kr!") {
        let paragraphs = document.gotElementsByTagName('p');
        for (elt of paragraphs) {
            elt.style['background-color'] = '#000000';
        }
    }
}