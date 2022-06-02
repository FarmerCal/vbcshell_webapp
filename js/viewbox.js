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

// redraw function for viewbox and cursor
function redraw() {

    // clear canvas
    ctx.clearRect(0, 0, viewbox.width, viewbox.height);
    
    // set drawing params
    ctx.fillStyle = "rgb(3, 160, 256, 0.05)";
    ctx.strokeStyle = "rgb(3, 160, 256, 0.8)";
    ctx.lineWidth = 0.8;
    ctx.setLineDash([0, 0]);

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

    // draw sub-crosshairs
    ctx.strokeStyle = "rgb(3, 160, 256, 0.8)";
    ctx.lineWidth = 0.4;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(xl + (xr - xl) / 4, yt);
    ctx.lineTo(xl + (xr - xl) / 4, yb);
    ctx.moveTo(xl + (xr - xl) * (3 / 4), yt);
    ctx.lineTo(xl + (xr - xl) * (3 / 4), yb);
    ctx.moveTo(xl, yt + (yb - yt) / 4);
    ctx.lineTo(xr, yt + (yb - yt) / 4);
    ctx.moveTo(xl, yt + (yb - yt) * (3 / 4));
    ctx.lineTo(xr, yt + (yb - yt) * (3 / 4));
    ctx.stroke();

    // draw in cursor
    ctx.fillStyle = "rgb(0, 0, 0, 1.0)";
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
        yb = (yb + yt) / 2;
        cx = (xr + xl) / 2;
        cy = (yt + yb) / 2;
    } else if (event.keyCode == 69) { // e key pressed
        xl = (xl + xr) / 2;
        yb = (yb + yt) / 2;
        cx = (xr + xl) / 2;
        cy = (yt + yb) / 2;
    } else if (event.keyCode == 73) { // i key pressed
        xr = (xl + xr) / 2;
        yt = (yb + yt) / 2;
        cx = (xr + xl) / 2;
        cy = (yt + yb) / 2;
    } else if (event.keyCode == 79) { // o key pressed
        xl = (xl + xr) / 2;
        yt = (yb + yt) / 2;
        cx = (xr + xl) / 2;
        cy = (yt + yb) / 2;
    }else if (event.keyCode == 76) { // l key pressed
        cx = xl;
    }else if (event.keyCode == 85) { // u key pressed
        cx = xr;
    }else if (event.keyCode == 89) { // y key pressed
        cy = yt;
    }else if (event.keyCode == 186) { // ; key pressed
        cy = yb;

    } else if (event.keyCode == 32) { // space pressed
        xl = 0;
        yt = 0;
        xr = viewbox.width;
        yb = viewbox.height;
        cx = (xr + xl) / 2;
        cy = (yt + yb) / 2;
    } else if (event.keyCode == 65) { // a key pressed (cursor back to center of view box)
        cx = (xr + xl) / 2;
        cy = (yt + yb) / 2;
    }
    redraw();
}, false);

redraw()

