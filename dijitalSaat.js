

function theTime() {
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");

    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hour.innerHTML = hr;
    minute.innerHTML=min;
    second.innerHTML=sec;
}
var interval = setInterval(theTime,1000);