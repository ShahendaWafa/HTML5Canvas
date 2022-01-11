var can = document.querySelector("#can");
var ctx = can.getContext('2d');

ctx.lineWidth = 15;
ctx.strokeStyle = "white";

ctx.beginPath();
ctx.moveTo(200, -10);
ctx.lineTo(200, 700);
ctx.lineTo(400, 700);
ctx.lineTo(400, -10);
ctx.lineTo(700, -10);
ctx.lineTo(700, 200);
ctx.lineTo(-10, 200);
ctx.lineTo(-10, 400);
ctx.lineTo(700, 400);
ctx.stroke();
ctx.closePath();

var GameOver = 0;

var availablePosisions = [
    [0, 0, 0,],
    [0, 0, 0,],
    [0, 0, 0]
]


function winState(p){
    var h = 0, v = 0, a = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(availablePosisions[j][i] == p){
                h++;
                if(i == j)
                    a++;
            }
            if(availablePosisions[i][j] == p){
                v++;
            }       
        }
        if(h == 3)
            return [i, 0];
        if(v == 3)
            return [i, 1]
        h = 0;
        v = 0;
    }
    if(a == 3)
        return "aR";

    if(availablePosisions[2][0] == p && availablePosisions[1][1] == p && availablePosisions[0][2] == p)
        return "aL";
}

can.addEventListener('click', clickReporter, false);
var turn = 1;
function clickReporter(){
    var sq = pickedSquare(event.offsetX, event.offsetY);
    console.log(sq);
    console.log(availablePosisions[sq[1]][sq[0]]);
    if(availablePosisions[sq[1]][sq[0]] == 0 && !GameOver){
        if(turn == 1)
            drawX(sq);
        else
            drawO(sq);
        turn *= -1;
    }
}

function pickedSquare(x, y){
    if(x <= 200 && y <= 200)
        return [0, 0];
    if(x <= 400 && y <= 200)
        return [1, 0];
    if(x <= 600 && y <= 200)
        return [2, 0];
    if(x <= 200 && y <= 400)
        return [0, 1];
    if(x <= 400 && y <= 400)
        return [1, 1];
    if(x <= 600 && y <= 400)
        return [2, 1];
    if(x <= 200 && y <= 600)
        return [0, 2];
    if(x <= 400 && y <= 600)
        return [1, 2];
    if(x <= 600 && y <= 600)
        return [2, 2];
    
}

function drawX(pos){
    var x = pos[0]*200 + 30;
    var y = pos[1]*200 + 30;
    ctx.strokeStyle = "yellow";

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 140, y+140);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x + 140, y)
    ctx.lineTo(x, y+140);
    ctx.stroke();
    ctx.closePath();

    availablePosisions[pos[1]][pos[0]] = 1;
    var win = winState(1);
    if(win){
        won(win);
    }
}

function drawO(pos){
    var x = pos[0]*200 + 100;
    var y = pos[1]*200 + 100;
    ctx.strokeStyle = "aqua";

    ctx.beginPath();
    ctx.arc(x, y, 70, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath();

    availablePosisions[pos[1]][pos[0]] = 2;

    var win = winState(2);
    if(win){
        won(win);
    }

}

function won(win){
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    if(win[1] == 1){
        ctx.moveTo(win[0], win[0]*200 + 100);
        ctx.lineTo(win[0] + 600, win[0]*200 + 100);
    }

    if(win[1] == 0){
        ctx.moveTo(win[0]*200 + 100, win[0]);
        ctx.lineTo(win[0]*200 + 100, win[0] + 600);
    }
    if(win[1] == "R"){
        ctx.moveTo(0, 0);
        ctx.lineTo(600,600);
    }
    if(win[1] == "L"){
        ctx.moveTo(600, 0);
        ctx.lineTo(0,600);
    }
    ctx.stroke();
    ctx.closePath();
    GameOver = 1;
}



