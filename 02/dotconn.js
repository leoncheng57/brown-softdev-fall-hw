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
*/

console.log("hello")

var c = document.getElementById("playground")
var ctx = c.getContext("2d")

var drawLine = function drawLine(x1, y1, x2, y2){
  ctx.beginPath();
  ctx.strokeStyle="#FF0000";
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};

drawLine(40, 40, 200, 200);

//Use this => .clearRect(a, b, c, d)



console.log("gbye")
