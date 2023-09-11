function global_init() {
    var cumvas = document.getElementById("main");

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
        this.keys[e.code] = e.type == 'keydown' ? true : false
        console.log(this.keys);
    }
}
