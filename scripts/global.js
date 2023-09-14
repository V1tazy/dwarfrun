function global_init() {
    var cumvas = document.getElementById("main");

    new MouseControls;
    new KeyControls;
    
    cumvas.width = window.innerWidth;
    cumvas.height = window.innerHeight;
}

class KeyControls{
    constructor( keyList = ['KeyW', 'KeyA', 'KeyD', 'KeyS']) {
        this.keyList = keyList;

        this.keys = {};

        addEventListener('keydown', e => this.changeState(e));
        addEventListener('keyup', e => this.changeState(e));

    }

    changeState(e){
        if(this.keyList.includes(e.code))
            this.keys[e.code] = e.type == 'keydown' ? true : false;
        
        console.log(this.keys);
    }
}

class MouseControls{
    constructor( cumvas = document.getElementById('main')){
        this.cumvas = cumvas;
        
        cumvas.addEventListener('click', e => this.changeState(e));

        this.pos = {x: 0, y: 0};
    }
    changeState(e){
        const rect = this.cumvas.getBoundingClientRect();

        this.pos.x = e.clientX - rect.left;
        this.pos.y = e.clientY - rect.top;

        console.log(this.pos.x,  this.pos.y);
    }
}


