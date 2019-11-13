function getDocumentWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

function getDocumentHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
};

var canvas = document.getElementById('dotCanvas');
var context = canvas.getContext('2d');

var allDots = [];

var vw = getDocumentWidth(),
    vh = getDocumentHeight();

var gradient = context.createLinearGradient(0,0, vw, vh);

gradient.addColorStop(0, '#ec0877');
gradient.addColorStop(.325, '#f93044');
gradient.addColorStop(.45, '#f75735');
gradient.addColorStop(1, '#fe880e');

// resize the canvas to fill the browser window
window.addEventListener('resize', onResize, false);
function onResize() {
  vw = getDocumentWidth();
  vh = getDocumentHeight();
  resizeCanvas();
}

function resizeCanvas() {
  canvas.width = vw;
  canvas.height = vh;
  drawDots();
}
resizeCanvas();


// grid
function drawGrid(){
  var cellW = 10,
      cellH = 10;
  
  // vertical lines
  for (var x = 0; x <= vw; x += cellW) {
      context.moveTo(x, 0); // x, y
      context.lineTo(x, vh);
  }
  
  // horizontal lines
  for (var y = 0; y <= vh; y += cellH) {
      context.moveTo(0, y); // x, y
      context.lineTo(vw, y);
  }

  context.strokeStyle = '#000000';
  context.stroke();
}
// drawGrid();

// dots
function drawDots() {
  var r = 3,
      cw = 30,
      ch = 30;
  
  for (var x = 20; x < vw; x+=cw) {
    for (var y = 20; y < vh; y+=ch) {
        context.beginPath();
        context.arc(x-r/2, y-r/2, r, 0, 2* Math.PI, false);
        context.fillStyle = gradient;
        context.fill(); 
    }
  }
}

function onHover(){

    canvas.onmousemove = function (e) {

        var rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top,
            i = 0, r,
            rayon = 6;

        context.clearRect(0, 0, canvas.width, canvas.height); 

        while (r = allDots[i++]) {
            context.beginPath();
            context.arc(x-rayon/2, y-rayon/2, rayon, 0, 2* Math.PI, false);
            context.fillStyle = gradient;
            context.fill(); 
        }

    };
}

console.log(allDots);
drawDots();
// onHover();