var can = document.querySelector("#can");

var ctx = can.getContext('2d');

ctx.lineWidth = 10;
ctx.lineJoin = "round";
ctx.strokeStyle = "orange";
ctx.fillStyle = "yellow";
ctx.lineCap = "round";

ctx.beginPath();
ctx.arc(250, 250, 100, 0, Math.PI*2);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(250, 260, 50, 0, Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.arc(210, 210, 10, 0, Math.PI*2);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black";

ctx.arc(290, 210, 10, 0, Math.PI*2);
ctx.fill();
ctx.stroke();
ctx.closePath();



ctx.closePath();