window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function getDocumentWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};
function getDocumentHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
};

var canvas = document.getElementById('dotCanvas');
var context = canvas.getContext('2d');

var hovered = false,
    mouse = {};

var allDots = [];

var vw = getDocumentWidth(),
    vh = getDocumentHeight();

var gradient = context.createLinearGradient(0,0, vw, vh);

gradient.addColorStop(0, '#ec0877');
gradient.addColorStop(.325, '#f93044');
gradient.addColorStop(.45, '#f75735');
gradient.addColorStop(1, '#fe880e');

// ecoute le curseur
document.addEventListener("mousemove", function(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}, false);

// resize the canvas
window.addEventListener('resize', onResize, false);

function onResize() {
  vw = getDocumentWidth();
  vh = getDocumentHeight();
  resizeCanvas();
}
function resizeCanvas() {
  canvas.width = vw;
  canvas.height = vh;
  drawDots(4);
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

// dots
function drawDots(_r) {
  var r = _r,
      cw = 30,
      ch = 30;
  
  for (var x = 20; x < vw; x+=cw) {
    for (var y = 20; y < vh; y+=ch) {
        context.beginPath();
        context.arc(x-r/2, y-r/2, r, 0, 2* Math.PI, false);
        context.fillStyle = gradient;
        context.fill();
        allDots.push({x: x, y: y, w: r, h: r});
    }
  }
}

// reinitialise le canvas
function clear(){
    context.clearRect(0, 0, vw, vh);
}

drawDots(4);
console.log(allDots);

// FONCTIONNE RALENTI LE NAVIGATEUR
// function update(){
//     clear();
    
//     for(i = 0; i < allDots.length; i++) {
//         var p = allDots[i];
        
//         if(mouse.x > p.x && mouse.x < p.x + p.w && mouse.y > p.y && mouse.y < p.y + p.h) 
//             hovered = true;
        
//         // traitement quand hover est vrai
//         if(hovered == true) {
//             drawDots(4);
//         }
        
//         // context.globalCompositeOperation = "lighter";
//         drawDots(3);
//     }
// }

// (function animloop(){
//     requestAnimFrame(animloop);
//     update();
// })();