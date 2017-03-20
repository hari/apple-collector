//an instance of XMLHttpRequest
//it helps to send HTTP requests
//POST GET

var ele  = document.getElementById('p');
var size = 12;
function changeFontSize() {
    size = size + 2;
    ele.style.color = "red";
    ele.style.fontSize = size + "px";
}