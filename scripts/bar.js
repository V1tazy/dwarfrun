var cumvas = null;
var screen = null;
var i = 0;
var background = new Image();
background.src = 'image/background.png';

function bar_enter() {
    cumvas = document.getElementById("main");
    screen = cumvas.getContext("2d");
}

function bar_loop() {
    screen.drawImage(background, (cumvas.width - ground.width)/2, (cumvas.height - ground.height)/2, ground.width, ground.height);
}

function bar_destroy(){
    screen.fillStyle = "rgb(0, 0, 0)";
}
