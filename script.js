
var hourPoint = document.getElementById("hour-point");
var minutPoint = document.getElementById("minute-point");
var secondPoint = document.getElementById("second-point");
var numeric = document.getElementById("numeric");




function currentTime() {
    var date = new Date();

    var hourAnlge = date.getHours() * 30;
    var minutAnlge = date.getMinutes() * 6;
    var secondAnlge = date.getSeconds() * 6;

    hourPoint.style.transform = "rotate(" + hourAnlge + "deg)";
    minutPoint.style.transform = "rotate(" + minutAnlge + "deg)";
    secondPoint.style.transform = "rotate(" + secondAnlge + "deg)";


    numeric.innerHTML = date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");

}


setInterval(currentTime, 0);