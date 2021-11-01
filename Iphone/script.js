
let second = 60;
let minutes = 60;
let hours = 24;
let days = 10;

function updateTimer() {

    second = second - 1
    document.getElementById("sec").innerText = second;
    document.getElementById("min").innerText = minutes;
    document.getElementById("hours").innerText = hours;
    document.getElementById("days").innerText = days;

    if (second == 0) {
        second = 60;
        minutes = minutes - 1;
        

    }
    if (minutes == 0) {
        minutes = 60;
        hours = hours - 1
    }

    if (hours == 0) {
        hours = 24;
        days = days - 1;
    }

}

setInterval(updateTimer, 1);