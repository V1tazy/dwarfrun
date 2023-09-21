import platforms from '../image/platform.png';
import bg from '../image/BG1.png';

const cumvas = document.querySelector('canvas');
const ctx = cumvas.getContext('2d');
const gravity = 0.5;

cumvas.width = window.innerWidth - 25;
cumvas.height = window.innerHeight - 10;

console.log(screen);

//классы всех объектов от игрока до платформ
class Player{
    constructor(){
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

    draw(){
        ctx.drawImage(this.image, this.pos.x, this.pos.y, this.image.width, this.image.height)
    }
    update(){}
}

class GenObj{
  constructor(x, y, image){
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

const PlatformImage = createImage(platforms);
const backgr = createImage(bg);

const genobj = [new GenObj(-1, -1)];
const player = new Player();
const platform = [
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

function anim() {
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

    // проверка платформы
    platform.forEach(platform => {
    if((player.pos.y + player.height <= platform.pos.y)
        && (player.pos.y + player.height + player.vel.y >= platform.pos.y)
        && (player.pos.x + player.width >= platform.pos.x)
        && (player.pos.x <= platform.pos.x + platform.width)
        ){
        player.vel.y = 0;
    }
    })
    // win moment
    if(scrolloff > 8000){
      console.log('bosstime')
    }
}

function start() {
    //запуск loop
    player.update();

    anim();

    var can_jump = true;

    addEventListener('keydown', ({keyCode}) =>{
        console.log(keyCode)
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
        console.log(keyCode)
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

// module.exports = { start: start };

// питонисты и один плюсовик жоска имеют JS смотреть бесплатно 18++ = 19

export { start };

start();