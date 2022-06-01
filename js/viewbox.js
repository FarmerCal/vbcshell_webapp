const viewbox = document.getElementById('viewbox');
const ctx = viewbox.getContext('2d');

viewbox.width = document.getElementById('viewbox').offsetWidth;
viewbox.height = document.getElementById('viewbox').offsetHeight;

var xl = 0;     // left side x component
var yt = 0;     // top side y component
var xr = viewbox.width;    // right side x component
var yb = viewbox.height;    // bottom side y component

ctx.fillStyle = "rgb(3, 160, 256, 0.2)";
ctx.strokeStyle = "rgb(3, 160, 256, 0.8)";
ctx.fillRect(xl, yt, xr, yb);
ctx.strokeRect(xl, yt, xr, yb);

// redraw function
function redraw() {

    ctx.clearRect(0, 0, viewbox.width, viewbox.height);

    ctx.fillRect(xl, yt, xr, yb);
    ctx.strokeRect(xl, yt, xr, yb);
}


const html = document.getElementById('html');
html.addEventListener('keydown', function(event) {
    console.log('keydown: '+event.keyCode);

    if (event.keyCode == 78) {
        xr = (xl+xr)/2;
    } else if (event.keyCode == 69) {
        xl = (xl+xr)/2;
    }else if (event.keyCode == 73) {
        yb = (yb-yt)/2;
    }else if (event.keyCode == 79) {
        yt = yt+(yb-yt)/2;
    } else if (event.keyCode == 32) {
            xl = 0;
            yt = 0;
            xr = viewbox.width;
            yb = viewbox.height;		  
    }

    redraw();

}, false);

redraw()

