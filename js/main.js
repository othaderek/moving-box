class Ball {
    constructor(){
        this.width = "10px";
        this.height = "10px";
        this.borderRadius = "50%";
        this.left = null;
        this.top = null;
    }
}

const box = document.querySelector('.box');
const body = document.querySelector('body');

// Initializes css styling on box element
const init = () => {
    box.style.position = "relative";
    box.style.left = "670px";
    box.style.top = "360px";
}

// 
const between = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Direction Handler
const boxDown = () => {
    box.style.top = parseInt(box.style.top) + 10 + "px";
}
const boxUp = () => {
    box.style.top = parseInt(box.style.top) - 10 + "px";
}
const boxLeft = () => {
    box.style.left = parseInt(box.style.left) - 10 + "px";
}
const boxRight = () => {
    box.style.left = parseInt(box.style.left) + 10 + "px";
}

// Move handler
const moveBox = (e) => {
    console.log(box);
    
    e.key === "ArrowRight" ? boxRight(): null;
    e.key === "ArrowLeft" ? boxLeft(): null;
    e.key === "ArrowUp" ? boxUp(): null;
    e.key === "ArrowDown" ? boxDown(): null;
}

// Create small balls
const makeBalls = () => {
    let i = between(100, 200);
    let ballsArray = [];
    for (let j = 0; j < i; j++){
        var left = between(0, 1400)
        var top = between(0, 780)
        console.log(left, top);
        
        let ball = new Ball();
        let div = document.createElement('div');
        div.setAttribute('class', 'ball')
        div.style.position = "absolute";
        div.style.width = ball.width;
        div.style.height = ball.height;
        div.style.borderRadius = ball.borderRadius;
        div.style.background = "magenta";
        div.style.left = `${left}px`;
        div.style.top = `${top}px`;
        body.append(div);
        ballsArray.push(div)
        
    }
    console.log(ballsArray);
}

init();
makeBalls();
// Event listeners
document.addEventListener('keydown', moveBox);

