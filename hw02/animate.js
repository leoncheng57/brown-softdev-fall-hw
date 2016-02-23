// Leon Cheng
// SoftDev2 pd3
// HW02 -- Circular
// 2016-02-22

console.log("beginning js file")

//Get Canvas Element
var c = document.getElementById("pad");
//Get 2d Context
var ctx = c.getContext("2d");

var growing = true; //boolean to keep track of growing or shrinking
var radius = 0;

var drawDot = function(){

  // Change Radius by increasing for decreasing
  if (growing){
    radius += 1;
  }
  else{
    radius -= 1;
  }

  // Set it to either Growing or Shrinking
  if (radius == c.width/2){
    growing = false;
  }
  else if (radius == 0){
    growing = true;
  }

  //Draw the circle
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
  ctx.fillStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  window.requestAnimationFrame(drawDot);

}

// Repeatedly Call the Function
window.requestAnimationFrame(drawDot);


ctx.beginPath();
ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
ctx.fillStyle = "#000000"
ctx.stroke();
ctx.fill();
ctx.closePath();

console.log("end of js file")
