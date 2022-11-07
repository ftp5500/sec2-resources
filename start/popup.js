const time = document.querySelector('#time');
const getDate = () => {
    const date = new Date()
    return date.toLocaleTimeString();
}
setInterval(() => {

    time.innerHTML = getDate()
}, 1000);

chrome.action.setBadgeText({
    text:"Time"
},() => {})
