var can = document.querySelector("#can");

var ctx = can.getContext('2d');

ctx.lineWidth = 10;
ctx.lineJoin = "round";
ctx.fillStyle = "yellow";
ctx.lineCap = "round";

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.arc(250, 250, 100, Math.PI / 6, Math.PI*2 - Math.PI/6);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();


