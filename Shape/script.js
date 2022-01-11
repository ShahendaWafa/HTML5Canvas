var can = document.querySelector("#can");

var ctx = can.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineJoin = "round";
ctx.strokeStyle = "orange";
ctx.fillStyle = "yellow";
ctx.lineCap = "round";
ctx.moveTo(250, 150);
ctx.lineTo(325, 215);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
ctx.lineTo(175, 215);
ctx.lineTo(250, 150);


ctx.fill();
ctx.stroke();
ctx.closePath();