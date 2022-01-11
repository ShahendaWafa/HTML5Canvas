var can = document.querySelector("#can");

var ctx = can.getContext('2d');

var g = ctx.createLinearGradient(100, 100, 350, 100);
g.addColorStop(0, "blue");
g.addColorStop(0.5, "purple");
g.addColorStop(1, "yellow");

ctx.fillStyle = g;

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.quadraticCurveTo(100, 100, 250, 350);
ctx.quadraticCurveTo(400, 100, 250, 250);
ctx.fillStyle = g;
ctx.fill();
ctx.stroke();



