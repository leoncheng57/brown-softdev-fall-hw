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
*/

console.log("hello")

var c = document.getElementById("playground")
var ctx = c.getContext("2d")

/* STORING THE ORIGINAL POINT TO START DRAWING THE LINE FROM */
// px = previous x
// py = previous y
var px = -1;
var py = -1;

/* DRAW A LINE (ctx, x1, y1, x2, y2)*/
var drawLine = function drawLine(ctx, x1, y1, x2, y2){
  ctx.beginPath();
  ctx.strokeStyle="#071550";
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};

/* DRAW A CIRCLE/DOT (ctx, x, y) */
var drawCircle = function drawCircle(ctx, x, y){
  ctx.beginPath();
  ctx.strokeStyle="#cf2424";
  ctx.fillStyle = "#cf2424";
  ctx.arc(x, y, 15, 0, 2*Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

/* FIND WHAT THE COORS OF THE MOUSE ARE WHEN CLICKED*/
var mouseCoors = function mouseCoors(event){
  var x = event.pageX;
  var y = event.pageY;
  //To fix the x and y coordinates to be relative to the canvas element box
  //(0,0) is at the top left corner of the canvas box
  x -= c.offsetLeft;
  y -= c.offsetTop;
  console.log("x: "+x + ", " + "y: "+ y);
  //draw circle
  drawCircle(ctx, x, y);
  //draw the line, make sure to update the px and py
  if (px != -1 && py !=-1){
    drawLine(ctx, px, py, x, y);
  }
  px = x;
  py = y;
};

c.addEventListener("click", mouseCoors);

var clearPad = function clearPad(){
  ctx.clearRect(0, 0, 500, 500);
};

console.log("gbye")
