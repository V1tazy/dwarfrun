import platforms from '../image/platform.png';
import bg from '../image/BG1.png';
import dwarf_right from '../image/dwarf_right.png';
import logo from '../image/logo.png';
import hp_image from '../image/hptemplate.png' 
import spike_img from '../image/spike.png'
import dwarf1 from '../image/dwarf_right.png'
import dwarf2 from '../image/dwarf_right1.png'
import dwarf3 from '../image/dwarf_right2.png'
import dwarf4 from '../image/dwarf_right3.png'
import dwarf5 from '../image/dwarf_right4.png'
import dwarf6 from '../image/dwarf_right5.png'
import dwarf7 from '../image/dwarf_right6.png'
import dwarf8 from '../image/dwarf_right7.png'
import pivko from '../image/beer.png'

//Начнем с того, что мы хотели использовать некоторые приколы canvas и подрубили эмуляцию сервера, 
//но что-то пошло не так и у нас появилась проблема с модулями, так что радуемся жизни в одном файле

const cumvas = document.querySelector('canvas');
const ctx = cumvas.getContext('2d');
const gravity = 0.5;

ctx.imageSmoothingEnabled = false;

cumvas.width = window.innerWidth;
cumvas.height = window.innerHeight;

var can_jump = false;

var main_sprites = [
    dwarf1,
    dwarf2,
    dwarf3,
    dwarf4,
    dwarf5,
    dwarf6,
    dwarf7,
    dwarf8
]

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
            x: 0,
            y: 1,
        }

        this.vel = {
            x: 0,
            y: 1
        }

        this.frame = 0
        this.frames = main_sprites.map(x => createImage(x))

        console.log(this.frames)
        this.image = this.frames[this.frame]
        this.width = this.image.width * 4
        this.height = this.image.height * 4
        this.hp = 3
    }

    draw(){
        ctx.drawImage(
            this.image,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height)
    }

    update(){
        this.image = this.frames[this.frame];

        this.pos.y += this.vel.y
        this.pos.x += this.vel.x
        
        this.draw()
        
        if(this.pos.y + this.height + this.vel.y <= cumvas.height){
            this.vel.y += gravity
        }
    }
}

class Spike{
    constructor(x, y){
        this.pos = {
            x,
            y
        }
        this.image = createImage(spike_img)
    }
    draw() {
        ctx.drawImage(this.image, this.pos.x, this.pos.y, this.image.width, this.image.height)
    }

    update(){}
}

class Heart{
    constructor(x, y){
        this.pos = {
            x,
            y
        }

        this.image = createImage(hp_image)
        this.width = this.image.width
        this.height = this.image.height
    }
    draw(){
        ctx.drawImage(this.image,
            this.pos.x, this.pos.y, 50, 50)
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

class Beer{
    constructor(x, y, width_beer = 128, height_beer = 128){
        this.pos = {
            x: x,
            y: y,
            width: width_beer,
            height: height_beer
        }
        this.image = createImage(pivko);
    }
    draw(){
        ctx.drawImage(this.image, this.pos.x, this.pos.y, this.pos.width, this.pos.height)
    }
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
    ctx.drawImage(this.pos.image, this.pos.x, this.pos.y, cumvas.width, cumvas.height)
  }
}

function createImage(imgSrc){
  let image = new Image();
  image.src = imgSrc;

  return image;
}

let PlatformImage = createImage(platforms);
const backgr = createImage(bg);

let genobj = [new GenObj(-1, -1)];
let player = new Player();
let enemy = new Enemy();
let hp_i = [new Heart(100, cumvas.height / 15), new Heart(175, cumvas.height / 15), new Heart(250, cumvas.height / 15)]
let platform = [
    new Platform(0, cumvas.height - 100),
    new Platform(PlatformImage.width - 80, cumvas.height - 100),
    new Platform(1500, cumvas.height - 100),
    new Platform(2000, cumvas.height - 100),
    new Platform(2500, cumvas.height - 100),
    new Platform(3500, cumvas.height - 150),
    new Platform(4500, cumvas.height - 100),
    new Platform(5000, cumvas.height - 100),
    new Platform(6000, cumvas.height - 100)
];
let spike = [new Spike(750, cumvas.height - 140), 
    new Spike(1650, cumvas.height - 140)
    ,new Spike(2100, cumvas.height - 140),
    new Spike(2200, cumvas.height - 140),
    new Spike(2500, cumvas.height - 140),
    new Spike(2600, cumvas.height - 140),
    new Spike(2700, cumvas.height - 140),
    new Spike(2975, cumvas.height - 140)];
let beer = [new Beer(cumvas.width - 200, cumvas.height /15, 64, 64)]

const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    }
}

//отсчет до босс комнаты
let scrolloff = 0;

function respawn(hp, hp_i){
    PlatformImage = createImage(platforms);

    genobj = [new GenObj(-1, -1)];
    player = new Player();
    hp_i = hp_i.pop();
    player.hp = hp
    enemy = new Enemy();
    platform = [
        new Platform(0, cumvas.height - 100),
        new Platform(PlatformImage.width - 80, cumvas.height - 100),
        new Platform(1500, cumvas.height - 100),
        new Platform(2000, cumvas.height - 100),
        new Platform(2500, cumvas.height - 100),
        new Platform(3500, cumvas.height - 150),
        new Platform(4500, cumvas.height - 100),
        new Platform(5000, cumvas.height - 100),
        new Platform(6000, cumvas.height - 100)
    ];
    spike = [new Spike(750, cumvas.height - 140), 
        new Spike(1650, cumvas.height - 140),
        new Spike(2100, cumvas.height - 140),
        new Spike(2200, cumvas.height - 140),
        new Spike(2500, cumvas.height - 140),
        new Spike(2600, cumvas.height - 140),
        new Spike(2700, cumvas.height - 140)]
    
//отсчет до босс комнаты

    scrolloff = 0;
}
//запуск loop


function anim() {
    if(scrolloff < 26000){
    if(player.hp > 0){
        requestAnimationFrame(anim);
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, cumvas.width, cumvas.height);
        genobj.forEach((genobj) =>{
            genobj.draw();
        })
        platform.forEach(platform => {
            platform.draw();
        })
        beer.forEach(beer => {
            beer.draw();
        })
        spike.forEach(spike => {
            spike.draw();
        })
        hp_i.forEach(hp_i => {hp_i.draw()})
        player.update();

        if(keys.left.pressed && player.pos.x > 8000){
            player.vel.x = 0;
        }

        if(keys.right.pressed && player.pos.x < 400){
            player.vel.x = 5;
        }
        else if(keys.left.pressed && player.pos.x > 100){
            player.vel.x = -5;
        }
        else {
            player.vel.x = 0
        }
        
        if(keys.right.pressed){
            platform.forEach(platform => {
                scrolloff += 5;
                platform.pos.x -= 10;
            })
            spike.forEach(spike => {
                spike.pos.x -= 10;
            })
        }
        else if(keys.left.pressed){
            platform.forEach(platform => {
                scrolloff -= 5;
                platform.pos.x += 10;
            })
            spike.forEach(spike => {
                spike.pos.x += 10;
            })

        }

        if(player.pos.y > cumvas.height){
            respawn(player.hp - 1, hp_i);
            console.log(player.hp);
        }

        // проверка платформы
        platform.forEach(platform => {
            if((player.pos.y + player.height <= platform.pos.y)
                && (player.pos.y + player.height + player.vel.y >= platform.pos.y)
                && (player.pos.x + player.width >= platform.pos.x)
                && (player.pos.x <= platform.pos.x + platform.width)
                ) {
                can_jump = true;
                player.vel.y = 0;
            }
        })
        spike.forEach(spike => {
            // console.log(spike)
            let intersects_by_x = (player.pos.x + player.width - 20 >= spike.pos.x && player.pos.x <= spike.pos.x + spike.image.width);
            let intersects_by_y = (cumvas.height - player.pos.y <= (cumvas.height - spike.pos.y) + spike.image.height * 2);

            console.log([intersects_by_x, intersects_by_y, player.width, player.pos.x + player.width, spike.pos.x])
            if(intersects_by_x
            && intersects_by_y){
                respawn(player.hp - 1, hp_i)
                console.log(player.hp)
            }
        })
    }
    else {
        ctx.clearRect(0, 0, cumvas.width, cumvas.height); 
        console.log("Game Over");
        ctx.fillStyle = 'white';

        let w = 300
        let h = 100
        let xa = (cumvas.width - w) / 2
        let ya = (cumvas.height - h) / 2

        ctx.fillRect(xa, ya, w, h);

        ctx.fillStyle = 'red'

        let text = ctx.measureText("Game over")

        ctx.fillText(
            "Game over",
            xa + text.width / 1.5,
            ya + (text.actualBoundingBoxAscent * 3)
        );
    }
}
else{
    ctx.clearRect(0,0, cumvas.width, cumvas.height);
    console.log("Game win");
}
}

let game_started = false;

let start_game = () => {
    if(game_started)
        return;

    game_started = true;
    player.update(); 
    anim();

    addEventListener('keydown', ({keyCode}) =>{
    switch(keyCode) {
        case 32:
        case 87:
            console.log('вверх')
            if(can_jump) {
                player.vel.y = -15;
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
            keys.right.pressed = true;
            break;
    }   
    })

    addEventListener('keyup', ({keyCode}) =>{
        switch(keyCode){
            case 87: 
                console.log('Вверх действие завершено');
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
                keys.right.pressed = false;
                break;
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
    
let logo_img = createImage(logo)

startbtn.x = (cumvas.width - startbtn.width) / 2
startbtn.y = (cumvas.height - startbtn.height + 200) / 2

startbtn.onmouseup = function(a) {
    removeEventListener('mouseup', this.onmouseup);
    removeEventListener('mouseup', this.mouseup);
    start_game();
};

logo_img.addEventListener("load", () => {
    console.log(logo_img)
    
    ctx.drawImage(logo_img, (cumvas.width - logo_img.width) / 2, 0)
    
    startbtn.draw(ctx);
})

/// Здесь у нас начались проблемы с меню и мы начали жестка хардкодить смотреть без регистрации и смс
// C# enjoyer и C++'ник фигачат как не в себя
