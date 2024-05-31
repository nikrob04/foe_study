function showTime () {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000)

function showSec () {
    let today = new Date();
    let currentsec = today.getSeconds();
    document.getElementById('timeSec').innerHTML = currentsec;
}
setInterval (showSec, 1000)