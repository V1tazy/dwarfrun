var cumvas = null;
var screen = null;

function menu_enter() {
    cumvas = document.getElementById("main");
    screen = cumvas.getContext("2d");
}

function menu_loop() {
    screen.fillRect(0, 0, 100, 100);
}