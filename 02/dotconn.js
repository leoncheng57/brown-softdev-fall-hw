/*
Leon Cheng
SoftDev2 pd3
HW2 -- Dot, Dot, Dot
2016-02-11
*/

//TODO: Rem to add comments to your code
/*
Use preventDefault
  function(e)
  e.preventDefault()
.clearRect(a, b, c, d)
<id>.addEventListener("click", fxn)
*/

console.log("hello")

var c = document.getElementById("playground")
var ctx = c.getContext("2d")

/* DRAW A LINE (ctx, x1, y1, x2, y2)*/
var drawLine = function drawLine(ctx, x1, y1, x2, y2){
  ctx.beginPath();
  ctx.strokeStyle="#FF0000";
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};

drawLine(ctx, 40, 40, 200, 200);

/* FIND WHAT THE COORS OF THE MOUSE ARE WHEN CLICKED*/
var mouseCoors = function mouseCoors(event){
  var x = event.pageX;
  var y = event.pageY;
  console.log("x: "+x + ", " + "y: "+ y);
};

c.addEventListener("click", mouseCoors);

/* DRAW A CIRCLE/DOT (ctx, x, y) */
var drawCircle = function drawCircle(ctx, x, y){
  ctx.beginPath();
  ctx.fillStyle = "#cf2424";
  ctx.arc(x, y, 15, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();
};

drawCircle(ctx, 400, 400);



console.log("gbye")
