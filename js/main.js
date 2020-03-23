const box = document.querySelector('.box');

// Initializes css styling on box element
const init = () => {
    box.style.position = "relative";
    box.style.left = "0px";
    box.style.top = "0px";
}

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
    e.key === "ArrowRight" ? boxRight(): null;
    e.key === "ArrowLeft" ? boxLeft(): null;
    e.key === "ArrowUp" ? boxUp(): null;
    e.key === "ArrowDown" ? boxDown(): null;
}

init();
// Event listeners
document.addEventListener('keydown', moveBox);

