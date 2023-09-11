var cumvas = null;
var screen = null;
const ground = new Image();
ground.src = "image/ground_menu.jpg";

function menu_enter() {
    cumvas = document.getElementById("main");
    screen = cumvas.getContext("2d");
}

var curcolor = [0, 0, 0];

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function menu_loop(sid) {
    if(curcolor[0] >= 255) {
        clearInterval(sid);
        return;
    }

    curcolor[0] += 1;
    curcolor[1] += 1;
    curcolor[2] += 1;

    screen.fillStyle = rgbToHex(curcolor[0], curcolor[1], curcolor[2]);
    screen.fillRect(0, 0, cumvas.width, cumvas.height);
    screen.drawImage(ground, (cumvas.width - ground.width)/2, (cumvas.height - ground.height)/2, ground.width, ground.height);
}