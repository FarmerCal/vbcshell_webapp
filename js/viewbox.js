const viewbox = document.getElementById('viewbox');
const ctx = viewbox.getContext('2d');

viewbox.width = document.getElementById('viewbox').offsetWidth;
viewbox.height = document.getElementById('viewbox').offsetHeight;

// initialize variables
var xl = 0;     // left side x component
var yt = 0;     // top side y component
var xr = viewbox.width;    // right side x component
var yb = viewbox.height;    // bottom side y component

var cx = (xr + xl) / 2; // set initial cursor position to center of view box
var cy = (yt + yb) / 2;

const LEN = 8;
const moveHistory = new Array(LEN);

// redraw function
function redraw() {

    // clear canvas
    ctx.clearRect(0, 0, viewbox.width, viewbox.height);
    
    // set drawing params
    ctx.fillStyle = "rgb(3, 160, 256, 0.1)";
    ctx.strokeStyle = "rgb(3, 160, 256, 0.8)";
    ctx.lineWidth = 0.5;

    // draw and fill viewbox
    ctx.fillRect(xl, yt, xr-xl, yb-yt);
    ctx.strokeRect(xl, yt, xr - xl, yb - yt);
    
    // draw in crosshairs
    ctx.beginPath();
    ctx.moveTo(xl, (yb + yt) / 2);
    ctx.lineTo(xr, (yb + yt) / 2);
    ctx.stroke(); 

    ctx.moveTo((xr + xl) / 2, yt);
    ctx.lineTo((xr + xl) / 2, yb);
    ctx.stroke(); 

    // draw in cursor
    ctx.strokeStyle = "rgb(0, 0, 0, 1.0)";
    ctx.fillStyle = "rgb(0, 0, 0, 1.0)";
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 12, cy + 4);
    ctx.lineTo(cx + 4, cy + 12);
    ctx.lineTo(cx, cy);
    ctx.fill();

    console.log('redraw() called!')
    console.log(((xr + xl) / 2) + 8, (yt + yb) / 2)
}


const html = document.getElementById('html');
html.addEventListener('keydown', function(event) {
    console.log('keypressed: '+event.keyCode);

    if (event.keyCode == 78) { // n key pressed
        xr = (xl + xr) / 2;
        cx = (xr + xl) / 2;
    } else if (event.keyCode == 69) {
        xl = (xl + xr) / 2;
        cx = (xr + xl) / 2;
    }else if (event.keyCode == 73) {
        yb = (yb + yt) / 2;
        cy = (yt + yb) / 2;
    }else if (event.keyCode == 79) {
        yt = (yb + yt) / 2;
        cy = (yt + yb) / 2;
    } else if (event.keyCode == 32) {
        xl = 0;
        yt = 0;
        xr = viewbox.width;
        yb = viewbox.height;
        cx = (xr + xl) / 2;
        cy = (yt + yb) / 2;
    }

    redraw();

}, false);

redraw()

