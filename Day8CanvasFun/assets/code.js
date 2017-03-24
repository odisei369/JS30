const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle = `hsl(1, 100%, 50%)`;
let isClick = false;
let directionOfChange = true;
let hue = 0;
ctx.lineWidth = 30;

canvas.addEventListener("mousemove", drawLine);
function drawLine(e){
    console.log(e);
    if(isClick){
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX-e.movementX, e.offsetY-e.movementY);
        ctx.stroke();
        ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`;
        changeLineWidth();
    }

}
function changeLineWidth() {
    if(directionOfChange){ctx.lineWidth++}else{ctx.lineWidth--}
    if(ctx.lineWidth <=1 || ctx.lineWidth >= 100){directionOfChange = !directionOfChange;}
}

function changeState() {
    isClick = !isClick;
}
function changeStateToFalse() {
    isClick = false;
}
canvas.addEventListener("mousedown" , changeState);
canvas.addEventListener("mouseup", changeStateToFalse);
canvas.addEventListener("onmouseleave", changeStateToFalse);