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
import background_music from '../bgm.mp3'
import gameover_video from '../go.mp4'

//Начнем с того, что мы хотели использовать некоторые приколы canvas и подрубили эмуляцию сервера, 
//но что-то пошло не так и у нас появилась проблема с модулями, так что радуемся жизни в одном файле

const cumvas = document.querySelector('canvas');
const ctx = cumvas.getContext('2d');
const gravity = 0.5;

var scores = [];

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

var music = new Audio(background_music);

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
    constructor(x, y, width_beer = 128, height_beer = 128, type){
        this.pos = {
            x: x,
            y: y,
            width: width_beer,
            height: height_beer
        }
        this.isUI = type;
        this.image = createImage(pivko);
        this.beerCounter = 0;
        this.status = false;
    }
    draw(){
        if(this.isUI){
        	ctx.drawImage(this.image, this.pos.x, this.pos.y, this.pos.width, this.pos.height)
        	ctx.fillText(this.beerCounter, this.pos.x - this.pos.width, this.pos.y + this.pos.height/2)
        }
        else
            ctx.drawImage(this.image, this.pos.x + this.pos.width, this.pos.y, this.pos.width, this.pos.height)
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
    ctx.drawImage(this.pos.image, cumvas.width + this.pos.x, this.pos.y, cumvas.width, cumvas.height)
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
var player = new Player();
let enemy;
var hp_i = [new Heart(100, cumvas.height / 15), new Heart(175, cumvas.height / 15), new Heart(250, cumvas.height / 15)];;
let platform;
let spike;
let lastPlatformX

const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    }
}

function getLastPlatformX() {
    if (platform.length > 0) {
        const lastPlatform = platform[platform.length - 1];
        const lastPlatformX = lastPlatform.pos.x;
        return lastPlatformX;
    }
    return 0;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createPlatform(x, y) {
    platform.push(new Platform(x, y));
}

// Функция для создания шипа
function createSpike(x, y) {
    spike.push(new Spike(x, y));
}

// Функция для генерации платформы и шипа
function generateRandomPlatformsAndSpikes() {
    let distanceBetweenPlatforms = generateRandomNumber(100, 500);
    let lastPlatformX = getLastPlatformX(); // Получение координаты x последней платформы

    let platformX = lastPlatformX + distanceBetweenPlatforms;
    let platformY = generateRandomNumber(cumvas.height - 250, cumvas.height - 100); // Выберите ваше значение Y для платформы

    const spikesForPlatform = generateRandomNumber(1, 1); // Количество шипов для платформы

    createPlatform(platformX, platformY); // Создание платформы

    for (let i = 0; i < spikesForPlatform; i++) {
        const spikeX = platformX + generateRandomNumber(50, 400);
        const spikeY = platformY - 40; // Выберите ваше значение Y для шипа

        createSpike(spikeX, spikeY); // Создание шипов
    }
}



//отсчет до босс комнаты
let scrolloff = 0;

var animid;

function initialize() {
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
    spike = [
        new Spike(750, cumvas.height - 140), 
        new Spike(1650, cumvas.height - 140),
        new Spike(2100, cumvas.height - 140),
        new Spike(2200, cumvas.height - 140),
        new Spike(2500, cumvas.height - 140),
        new Spike(2600, cumvas.height - 140),
        new Spike(2700, cumvas.height - 140),
        new Spike(2975, cumvas.height - 140)
    ];
    player.pos = {x: 0, y: 1}
    player.vel = {x: 0, y: 1}

//отсчет до босс комнаты

    scrolloff = 0;
}

function respawn(){
    PlatformImage = createImage(platforms);

    hp_i.pop();
    player.hp--

    scores.push(scrolloff)
    
    initialize();
}
//запуск loop

function anim() {
    if(true){
    if(player.hp > 0){
        lastPlatformX = getLastPlatformX();
        // requestAnimationFrame(anim);
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, cumvas.width, cumvas.height);

        genobj.forEach((genobj) =>{
            genobj.draw();
        })
        platform.forEach(platform => {
            platform.draw();
        })
        spike.forEach(spike => {
            spike.draw();
        })
        hp_i.forEach(hp_i => {hp_i.draw()})
        player.update();

        if(keys.left.pressed && (player.pos.x > 8000)){
            player.vel.x = 0;
        }

        if(keys.right.pressed && player.pos.x < 400){
            player.vel.x = 10;
        }
        else if(keys.left.pressed && player.pos.x > 100){
            player.vel.x = -10;
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

            
			if(genobj[0].pos.x + cumvas.width <= 0) {
				genobj[0].pos.x = 0
			}

            genobj[0].pos.x -= 1
        }
        else if(keys.left.pressed){
            if(player.pos.x > platform[0].pos.x){
                platform.forEach(platform => {
                    scrolloff -= 5;
                    platform.pos.x += 10;
            })
                spike.forEach(spike => {
                spike.pos.x += 10;
            })
            }

            console.log(genobj[0].pos.x + cumvas.width)

            genobj[0].pos.x+= 1
        }


        if(player.pos.y > cumvas.height){
            respawn();
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

            //console.log([intersects_by_x, intersects_by_y, player.width, player.pos.x + player.width, spike.pos.x])
            if(intersects_by_x
            && intersects_by_y){
                respawn()
                console.log(player.hp)
            }
        })

        if (player.pos.x > lastPlatformX - cumvas.width) {
            generateRandomPlatformsAndSpikes();
        }

        ctx.fillText(scrolloff, 1000, 60)
    }
    else {
        ctx.clearRect(0, 0, cumvas.width, cumvas.height); 
        ctx.fillStyle = 'white';

        let w = 500
        let h = 100
        let xa = (cumvas.width - w) / 2
        let ya = (cumvas.height - h) / 2

        ctx.fillRect(xa, ya, w, h);

        ctx.fillStyle = 'red'

		let hiscoretext = "Game over (Max score: " + Math.max(...scores) + ")"

        let text = ctx.measureText(hiscoretext)

        ctx.fillText(
            hiscoretext,
            (xa + text.width) / 1.5,
            ya + (text.actualBoundingBoxAscent * 3)
        );

        music.pause();

		clearInterval(animid)

        document.getElementById("cumvas").outerHTML = "<video id='vid' src='" + gameover_video + "' controls='' autoplay fullscreen/>";
        document.getElementById("vid").requestFullscreen();

    }
}
else{
    ctx.clearRect(0, 0, cumvas.width, cumvas.height);

    const coords = ctx.measureText("You won!");

    ctx.fillText("You won!",
                 (cumvas.width - coords.width) / 2,
                 (cumvas.height - coords.actualBoundingBoxAscent) / 2
                );

    music.pause();
}
}

let game_started = false;

let start_game = () => {
    if(game_started)
        return;

    initialize();

    game_started = true;
    player.update(); 
    
    animid = setInterval(anim, 1000 / 60);

    music.play();

    addEventListener('keydown', ({keyCode}) =>{
    switch(keyCode) {
        case 32:
        case 87:
            if(can_jump) {
                player.vel.y = -15;
                can_jump = false;
            }
            break;

        case 83:
            break;

        case 65:
            keys.left.pressed = true;
            break;

        case 68:
            keys.right.pressed = true;
            break;
    }   
    })

    addEventListener('keyup', ({keyCode}) =>{
        switch(keyCode){
            case 87: 
                break;
            case 83:
                break;
            case 65:
                keys.left.pressed = false;
                break;
            case 68:
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
    ctx.drawImage(logo_img, (cumvas.width - logo_img.width) / 2, 0)
    
    startbtn.draw(ctx);
})

/// Здесь у нас начались проблемы с меню и мы начали жестка хардкодить смотреть без регистрации и смс
// C# enjoyer и C++'ник фигачат как не в себя
