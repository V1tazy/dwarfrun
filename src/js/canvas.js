import platforms from '../image/platform.png';
import bg from '../image/BG1.png';
import gm from '../image/ground_menu.jpg';

//Начнем с того, что мы хотели использовать некоторые приколы canvas и подрубили эмуляцию сервера, 
//но что-то пошло не так и у нас появилась проблема с модулями, так что радуемся жизни в одном файле

const cumvas = document.querySelector('canvas');
const ctx = cumvas.getContext('2d');
const gravity = 0.5;

cumvas.width = window.innerWidth;
cumvas.height = window.innerHeight;

class Button {
    constructor(label, color, width, height, x, y, textcolor = "#000000", textsize = 24) {
        this.label = label;
        this.width = width;
        this.height = height;
        this.color = color;
        this.textcolor = textcolor;
        this.textsize = textsize;
        this.x = x
        this.y = y

        addEventListener('mouseup', this.mouseup.bind(this))
    }

    draw(ctx) {
        ctx.lineWidth = 1;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.textcolor;

        ctx.fillRect(this.x, this.y, this.width, this.height)

        ctx.fillStyle = this.textcolor;
        ctx.font = this.textsize + "px sans-serif"

        var rktmtx = ctx.measureText(this.label)

        ctx.fillText(
            this.label,
            this.x + (this.width - rktmtx.width) / 2,
            this.y + (rktmtx.actualBoundingBoxAscent + this.height) / 2
        )
    }

    onmouseup(a) {
        
    }

    mouseup(a) {
        let x = a.clientX
        let y = a.clientY

        if(x > this.x && y > this.y && x < this.x + this.width && y < this.y + this.height) {
            this.onmouseup(a);
        }
    }
}

//классы всех объектов от игрока до платформ
class Player {
    constructor() {
        this.pos = {
            x: 100,
            y: 100,
        }

        this.vel = {
            x: 0,
            y: 1
        }
        
        this.width = 100
        this.height = 100
        this.hp = 3
    }

    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }

    update(){
        this.pos.y += this.vel.y
        this.pos.x += this.vel.x
        this.draw();
        if(this.pos.y + this.height + this.vel.y <= cumvas.height){
            this.vel.y += gravity;
        }
    }
}

class Enemy{
    constructor(){
        this.pos = {
            x: 400,
            y: 100
        }
        this.vel = {
            x:0,
            y:1
        }
        this.width = 100
        this.height = 100
        this.hp = 3 
    }

    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    update(){
        this.pos.y += this.vel.y;
        this.pos.x += this.vel.x;
        this.draw();
        if(this.pos.y + this.height + this.vel.y <= cumvas.height){
            this.vel.y += gravity;
        }
        else{
            this.vel.y = 0;
        }
    }
}

class Platform{
    constructor(x , y){
        this.pos = {
            x,
            y
        }

        this.image = PlatformImage;

        this.width = this.image.width;
        this.height = this.image.height;
    }

    draw() {
        ctx.drawImage(this.image, this.pos.x, this.pos.y, this.image.width, this.image.height)
    }

    update(){}
}

class GenObj{
  constructor(x, y){
    this.pos = {
      x,
      y,
      image: backgr
    }
  }
  draw(){
    ctx.drawImage(this.pos.image, this.pos.x, this.pos.y, cumvas.width, cumvas.height)}

}

function createImage(imgSrc){
  const image = new Image();
  image.src = imgSrc;
  return image;
}

let PlatformImage = createImage(platforms);
const backgr = createImage(bg);

let genobj = [new GenObj(-1, -1)];
let player = new Player();
let enemy = new Enemy();
let platform = [
    new Platform(0, 450),
    new Platform(PlatformImage.width - 80, 750),
    new Platform(1200, 450)
];


const keys = {
rigth:{
    pressed: false
},
left:{
    pressed: false
}
}


//отсчет до босс комнаты
let scrolloff = 0;


function respawn(hp){

    PlatformImage = createImage(platforms);

    genobj = [new GenObj(-1, -1)];
    player = new Player();
    player.hp = hp
    enemy = new Enemy();
    platform = [
    new Platform(0, 450),
    new Platform(PlatformImage.width - 80, 750),
    new Platform(1200, 450)
];
//отсчет до босс комнаты

    scrolloff = 0;
}
//запуск loop


function anim(){
    if(player.hp >= 0){
    requestAnimationFrame(anim);
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, cumvas.width, cumvas.height);
    genobj.forEach((genobj) =>{
      genobj.draw();
    })

    platform.forEach(platform => {
        platform.draw();
    })
    player.update();
    if(scrolloff > 8000){
        enemy.update();
    }

    if(keys.left.pressed && player.pos.x > 8000){
        player.vel.x = 0;
    }

    // проверки управления, создание границ и не только
    if(keys.rigth.pressed && player.pos.x < 400){
        player.vel.x = 5;
    }
    else if(keys.left.pressed && player.pos.x > 100){
        player.vel.x = -5;
    }
    else player.vel.x = 0
    
    if(keys.rigth.pressed){
        platform.forEach(platform => {
            scrolloff += 5;
            platform.pos.x -= 10;
        })
    }
    else if(keys.left.pressed){
        platform.forEach(platform => {
            scrolloff -= 5;
            platform.pos.x += 10;
        })

    }

    console.log(scrolloff)

    if(scrolloff > 8000){
        console.log("BossTime");
        activate_enemy = true;
    }

    if(player.pos.y > cumvas.height){
        respawn(player.hp - 1);
        console.log(player.hp);
    }

    // проверка платформы
    platform.forEach(platform => {
    if((player.pos.y + player.height <= platform.pos.y)
        && (player.pos.y + player.height + player.vel.y >= platform.pos.y)
        && (player.pos.x + player.width >= platform.pos.x)
        && (player.pos.x <= platform.pos.x + platform.width)
        ){
        player.vel.y = 0;
    }
    })}
    //Проиграли
    else{
        ctx.clearRect(0,0, cumvas.width, cumvas.height); 
        console.log("Game Over");
        ctx.fillStyle = 'White';
        rect = ctx.fillRect(400, 200, cumvas.width/2, cumvas.height/2);
        ctx.fillStyle = 'Blue';
    }
}

///Здесь начинается Веселуха для меню

let can_jump = true;

let start_game = () => {
    player.update(); 
    anim();

    addEventListener('keydown', ({keyCode}) =>{
    switch(keyCode) {
        case 87:
            console.log('вверх')
            if(can_jump) {
                player.vel.y = -10;
                can_jump = false;
            }
            break;

        case 83:
            console.log('вниз')
            break;

        case 65:
            console.log('влево')
            keys.left.pressed = true;
            break;

        case 68:
            console.log('вправо')
            keys.rigth.pressed = true;
            break;
    }   
    })

    addEventListener('keyup', ({keyCode}) =>{
        switch(keyCode){
            case 87: 
                console.log('Вверх действие завершено');
                can_jump = true;
                break;
            case 83:
                console.log('down end');
                break;
            case 65:
                console.log('left end');
                keys.left.pressed = false;
                break;
            case 68:
                console.log('right end');
                keys.rigth.pressed = false;
        }
    })
}

let startbtn = new Button(
    "Start",
    "#ffffff",
    300,
    75,
    0,
    0
);

startbtn.x = (cumvas.width - startbtn.width) / 2,
startbtn.y = (cumvas.height - startbtn.height) / 2

startbtn.onmouseup = function(a) {
    start_game();
    removeEventListener('mouseup', this.mouseup);
};

startbtn.draw(ctx);

/// Здесь у нас начались проблемы с меню и мы начали жестка хардкодить смотреть без регистрации и смс
// Непрограммист и C++'ник фигачат как не в себя