function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

function showSec() {
    let today = new Date();
    let currentsec = today.getSeconds();
    document.getElementById('timeSec').innerHTML = currentsec;

    let degrees = currentsec * 6;
    document.getElementById('arrow').style.transform = `rotate(${degrees}deg)`;
}
setInterval(showSec, 1000);
