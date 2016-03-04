console.log("beginning js file")

//length and width of the SVG box
var boxLen= 500;

// //testing window.setInterval
// intervalID = window.setInterval(function(){
//     console.log("tick");
// }, 16);

// var stop = function(){
//     window.clearInterval(intervalID);
// };


//Get SVG element
var pic = document.getElementById("vimage");

/*===CODE FOR CIRCLE===*/
var growing = true;
//Radius of Circle
var radius = 0;
// ID for the Animation Frame to stop or to keep going
var intervalID;

var drawDot = function(){
    pic.removeChild(pic.childNodes[0]); //remove previously drawn circle
    // Change Radius by increasing or decreasing
    if(growing)
	radius += 1;
    else
	radius -= 1;
    // Set it to either Growing or Shrinking
    if(radius==boxLen/2)
	growing=false;
    else if (radius==0)
	growing = true;
    //Draw the circle
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", boxLen/2);
    c.setAttribute("cy", boxLen/2);
    c.setAttribute("r", radius);
    c.setAttribute("fill", "orange");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    // Periodically Call the Function
    // requestId = window.requestAnimationFrame(drawDot);
}

var clear = function(){
    console.log(pic.childNodes);
    while(pic.childNodes[0]){
	pic.removeChild(pic.childNodes[0]); 
    }
    console.log(pic.childNodes);
}

var dvdLogoSetup = function(){
    //Booleans to keep track of movement
    var goingUp = false;
    var goingRight = false;
    //length and width of DVD logo
    var logoLen = 100;
    //x, y coors
    var lx = Math.random()*(boxLen - logoLen/2) + 1;
    var ly = Math.random()*(boxLen - logoLen/2) + 1;

    var drawLogo = function(){
	//remove all previously draw logos
	while(pic.childNodes[0]){
	    pic.removeChild(pic.childNodes[0]); 
	}
	//Moving vertically
	if (goingUp)
	    ly += 1;
	else
	    ly -= 1;
	//Moving horizontally
	if (goingRight)
	    lx+=1;
	else
	    lx-=1;
	//Change direction when wall is hit
	if (lx <=0 || lx>= boxLen-logoLen)
	    goingRight = !goingRight;
	if (ly <=0 || ly>=boxLen-logoLen)
	    goingUp = !goingUp;
	//Draw the logo
	var dvd = document.createElementNS('http://www.w3.org/2000/svg','image');
	dvd.setAttributeNS('http://www.w3.org/1999/xlink','href', 'logo_dvd.jpg');
	dvd.setAttribute("height", logoLen.toString());
	dvd.setAttribute("width", logoLen.toString());
	dvd.setAttribute("x", lx);
	dvd.setAttribute("y", lx);
	pic.appendChild(dvd);
    };
    //repeatedly call drawLogo
    intervalID = window.setInterval(drawLogo, 16);
};

var logo = document.getElementById("logo");
logo.addEventListener("click", dvdLogoSetup);


//Start Button
var start = document.getElementById("start");
start.addEventListener("click", function(){
    window.clearInterval(intervalID); //deletes the previous interval first, so that the speed will not start accelerating
    intervalID = window.setInterval(drawDot, 16)
});

//Stop Button
var stop = document.getElementById("stop");
stop.addEventListener("click", function(){
    window.clearInterval(intervalID);
});


console.log("ending js file")
