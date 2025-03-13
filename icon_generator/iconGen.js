import { easingFunctions } from "../src/easingFunctions.js"

let canvas;
let ctx;

const ICON_SIZE = 64;
const BG_COLOR = "#000000";
const FG_COLOR = "#ff7b00";
const GRID_COLOR = "#f8d097";
const BORDER = 8;

const SAVE_TOGGLE = false;

const func = 0;

window.onload = () => {
    console.log("loaded");
    canvas = document.createElement("canvas");
    let main = document.getElementsByTagName("main")[0];
    main.appendChild(canvas);

    canvas.width = ICON_SIZE;
    canvas.height = ICON_SIZE;

    ctx = canvas.getContext("2d");

    draw();
};

function draw() {
    for (let i = 0; i < easingFunctions.length; i++) {
        drawFunc(easingFunctions[i]);
    }
}

function drawFunc(f) {
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, ICON_SIZE, ICON_SIZE);

    ctx.fillStyle = FG_COLOR;
    ctx.strokeStyle = FG_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(BORDER, BORDER);
    ctx.lineTo(ICON_SIZE - BORDER, BORDER);
    ctx.lineTo(ICON_SIZE - BORDER, ICON_SIZE - BORDER);
    ctx.lineTo(BORDER, ICON_SIZE - BORDER);
    ctx.closePath();
    ctx.stroke();

    const icon_s = ICON_SIZE - BORDER * 2;

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(BORDER, canvas.height - BORDER);

    for (let x = 0; x < 1; x += 1 / ICON_SIZE) {
        let y = 1 - f.fn(x, ...Object.values(f.params));
        ctx.lineTo(BORDER + x * icon_s, BORDER + y * icon_s);
    }
    ctx.lineTo(BORDER + icon_s, BORDER);
    ctx.stroke();

    const filename = f.name.replaceAll(" ", "_").toLowerCase() + ".png";

    if (SAVE_TOGGLE) {
        console.log(filename);
        saveImage(filename);
        sleep(100);
        
    }
}

function saveImage(filename) {
    let img = canvas.toDataURL();
    const dllink = document.createElement("a");
    dllink.href = img;
    dllink.download = filename;
    dllink.click();
    dllink.remove();
}


function sleep(ms) {
    var currentTime = new Date().getTime();
 
    while (currentTime + ms >= new Date().getTime()) {
    }
 }