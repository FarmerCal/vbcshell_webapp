const viewbox = document.getElementById('viewbox');
const ctx = viewbox.getContext('2d');

viewbox.width = document.getElementById('viewbox').offsetWidth;
viewbox.height = document.getElementById('viewbox').offsetHeight;

var xl = 0;     // left side x component
var yt = 0;     // top side y component
var xr = viewbox.width;    // right side x component
var yb = viewbox.height;    // bottom side y component

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
    ctx.moveTo((xr + xl) / 2, (yt + yb) / 2);
    ctx.lineTo(((xr + xl) / 2) + 4, (yt + yb) / 2);

    console.log('redraw() called')
}


const html = document.getElementById('html');
html.addEventListener('keydown', function(event) {
    console.log('keypressed: '+event.keyCode);

    if (event.keyCode == 78) {
        xr = (xl+xr)/2;
    } else if (event.keyCode == 69) {
        xl = (xl+xr)/2;
    }else if (event.keyCode == 73) {
        yb = (yb+yt)/2;
    }else if (event.keyCode == 79) {
        yt = (yb+yt)/2;
    } else if (event.keyCode == 32) {
            xl = 0;
            yt = 0;
            xr = viewbox.width;
            yb = viewbox.height;		  
    }

    redraw();

}, false);

redraw()

