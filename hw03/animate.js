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
    //Stops the circle from accelerating in size if you spammed the start button, cancels the previous call
    window.cancelAnimationFrame( requestId );
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

//Button: If start is pressed, start calling the drawDot callbacks loop
var sb = document.getElementById("start");
sb.addEventListener("click", drawDot);

//Function to stop the animation
var stopIt = function(){
    window.cancelAnimationFrame(requestId)
}

//Button: If stop is pressed, set the variable true so that the drawDot callbacks loop is stopped
var rb = document.getElementById("stop");
rb.addEventListener("click", stopIt);

/*===CODE FOR LOGO===*/
//a function defined within a function, oh my!
var dvdLogoSetup = function() {    
    //Q: What good might this do?
    //Supposed to stop it from accelerating in size if you spammed the logo button, cancels the previous call
    //Though, it doesnt seem to have any affect on my code here (it does affect the circle code above)
    window.cancelAnimationFrame( requestId );

    //Arbitrarily pick two numbers for height and width
    var lheight = 100;
    var lwidth = 100;
    //Loading Image
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    //Booleans to keep track of direction of movement
    var goingUp = false;
    var goingRight = true;
    //X and Y Coors of the Logo
    var lx = Math.random()*(c.width-lwidth)+1;
    var ly = Math.random()*(c.height-lheight)+1;

    var drawLogo = function(){
	//Clear drawing pad first
	ctx.clearRect(0, 0, c.width, c.height);
	//Move in vertical direction
	if (goingUp)
	    ly += 1;
	else
	    ly -= 1;
	//Move in horizontal directoin
	if (goingRight)
	    lx += 1;
	else
	    lx -= 1;
	//Change the direction when it hits the wall
	if (lx <= 0 || lx >= c.width-lwidth)
	    goingRight = !goingRight;
	if(ly <= 0 || ly >= c.height-lheight)
	    goingUp = !goingUp;
	//Draw the image
	ctx.drawImage(logo, lx, ly, lwidth, lheight);
	//Periodically call the function
	window.requestAnimationFrame(drawLogo);
    }
    //Call the function
    drawLogo();
};

//Button: When logo button is pressed, call drawLogo
var lb = document.getElementById("logo");
lb.addEventListener("click", dvdLogoSetup);

console.log("end of js file")
