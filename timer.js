
setInterval(showTime, 1000);

var p = document.getElementById("output");
var input = document.getElementById('inputtime');
var userTime = "";

function showTime() {
    var d = new Date();
    var current = d.getHours() + ":" 
    + d.getMinutes() + ":" + d.getSeconds();
    p.innerText = current;

    if (current == userTime) {
        alert("Time out");
    }
}

function setTime() {
    userTime = input.value;
}