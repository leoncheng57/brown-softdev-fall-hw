console.log("beginning js file")

//testing window.setInterval
window.setInterval(function(){
  console.log("tick");
}, 16);

//Get SVG element
var pic = document.getElementById("vimage");

/*===CODE FOR CIRCLE===*/
var growing = true;
//Radius of Circle
var radius = 0;
// ID for the Animation Frame to stop or to keep going
var intervalID;

var drawDot = function(){
  //Stops the circle from accelerating in size if you spammed the start button, by cancelling the previous call
  window.clearInterval(intervalID);
  // Change Radius by increasing or decreasing
  if(growing)
    radius += 1;
  else
    radius += 1;
  // Set it to either Growing or Shrinking
  if(radius==pic.width/2)
    growing=false;
  else if (radius==0)
    growing = true;
  //Draw the circle
  var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
  c.setAttribute("cx", pic.width/2);
  c.setAttribute("cy", pic.height/2);
  c.setAttribute("r", radius);
  c.setAttribute("fill", "orange");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);
  // Periodically Call the Function
  // requestId = window.requestAnimationFrame(drawDot);
}

window.setInterval(drawDot, 16);


console.log("ending js file")
