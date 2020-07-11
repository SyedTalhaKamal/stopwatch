var hours = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var inerval;
function timer() {
    msec++;
    msecHeading.innerHTML = msec + "\n" + "MSec"
    if (msec == 100) {
        sec++;
        secHeading.innerHTML = sec + "\n" + " Second"
        msec = 0;
    }
    else if (sec == 60) {
        min++;
        minHeading.innerHTML = min + "\n" + " Minute"
        sec = 0;
    }
    else if (min == 60) {
        hours++;
        hourHeading.innerHTML = hours + "\n" + " Hour"
        min = 0;
    }
}
function start() {
    inerval = setInterval(timer, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;


}
function stop() {
    clearInterval(inerval);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
}
function reset() {
    hours = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = + "\n" + " " + "Hour";
    minHeading.innerHTML = min + "\n" + "Minute";
    secHeading.innerHTML = sec + "\n" + " Second";
    msecHeading.innerHTML = msec + "\n" + "MSec";
}