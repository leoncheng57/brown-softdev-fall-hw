// Leon Cheng
// SoftDev2 pd3
// HW03 -- Are We Ever Going to Start the Movie?
// 2016-02-23

console.log("beginning js file")

//Get Canvas Element
var c = document.getElementById("pad");
//Get 2d Context
var ctx = c.getContext("2d");



/*===CODE FOR CIRCLE===*/

//Boolean to keep track of growing or shrinking
var growing = true;
//Radius fo Circle
var radius = 0;
// ID for the Animation Frame to stop or to keep going
var requestId;


var drawDot = function(){

  // Change Radius by increasing or decreasing
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
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
  ctx.fillStyle = "#ff6c24" //orange
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Periodically Call the Function
  requestId = window.requestAnimationFrame(drawDot);
}

//If start is pressed, start calling the drawDot callbacks loop
var sb = document.getElementById("start");
sb.addEventListener("click", function(){
  drawDot();
});

//If stop is pressed, set the variable true so that the drawDot callbacks loop is stopped
var rb = document.getElementById("stop");
rb.addEventListener("click", function(){
  stopIt();
});

//Function to stop the animation
var stopIt = function(){
  window.cancelAnimationFrame(requestId)
}


/*===CODE FOR LOGO===*/

var logo = new Image();
logo.src = "logo_dvd.jpg";
ctx.fillStyle = "#ff6c24";
ctx.drawImage(logo, c.width/2, c.height/2, 100, 100);


console.log("end of js file")
