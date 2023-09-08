var cumvas = null;
var screen = null;
var i = 0;

function bar_enter() {
    cumvas = document.getElementById("main");
    screen = cumvas.getContext("2d");
}

function bar_loop() {
    i += 20;
    screen.fillStyle = "rgb(" + i + ",100,100)";
    screen.fillRect(0, 0, 400, 400);
}

function bar_destroy(){
    screen.fillStyle = "rgb(0, 0, 0)";
}