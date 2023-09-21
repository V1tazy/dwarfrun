const cumvas = document.querySelector('canvas');
const ctx = cumvas.getContext('2d');

var a = new Button("Играть", '#ffffff', 200, 50, "#121212");

function main_menu() {
    requestAnimationFrame(main_menu);

    a.draw(ctx, 100, 100);

    console.log("Menu");
}