/*
Team AngLe (Angela Chan and Leon Cheng)
SoftDev2 pd3
HW1b -- Finding Your Path Around the Canvas
2016-02-10
*/

/* Testing if js imported */
console.log("hello")

/* A PATRIOTIC FLAG */
/* Get canvas */
var c = document.getElementById("ftb2maga");
/* Object from canvas */
var ctx = c.getContext("2d");
/* Color is blue */
ctx.fillStyle = "#0000FF";
/* make square */
ctx.fillRect(0, 0, 100, 100);
/* Green border color */
ctx.strokeStyle = "#000000";
/* make border rectangle */
ctx.strokeRect(0, 0, 300, 200);
/* Color is red */
ctx.fillStyle = "#FF0000"
/* Make stripe */
ctx.fillRect(100, 0, 200, 25)
/* Make stripe */
ctx.fillRect(100, 50, 200, 25)
/* Make stripe */
ctx.fillRect(0, 100, 300, 25)
/* Make stripe */
ctx.fillRect(0, 150, 300, 25)

/* A WHITE STAR */
/* Begin drawing */
ctx.beginPath();
/* Set beginning point */
ctx.moveTo(50, 25);
/* Next point in star */
ctx.lineTo(35, 75);
/* Next point in star */
ctx.lineTo(75, 45);
/* Next point in star */
ctx.lineTo(25, 45);
/* Next point in star */
ctx.lineTo(65, 75);
/* Next point in star */
ctx.lineTo(50, 25);
/* Fill color is white */
ctx.fillStyle = "#FFFFFF"
/* Make star white (fill in drawing) */
ctx.fill();
/* Ending drawing */
ctx.closePath()

/* MEOW TEXT */
/* Begin text */
ctx.beginPath()
/* Setting font */
ctx.font = "30px arial"
/* Setting font color */
ctx.fillStyle = "#0066CC"
/* Setting and positioning text */
ctx.fillText("meow", 100, 300)
/* Ending text */
ctx.closePath()
/* Begin speech bubble */
ctx.beginPath()
/* First point in speech bubble */
ctx.moveTo(78, 260)
/* Top line of speech bubble */
ctx.lineTo(200, 260)
/* Right side of speech bubble */
ctx.lineTo(200, 337)
/* Adding the triangle thing to speech bubble */
ctx.lineTo(180, 325)
/* Bottom line of speech bubble */
ctx.lineTo(78, 325)
/* Closing speech bubble */
ctx.lineTo(78, 260)
/* Coloring speech bubble lines */
ctx.stroke()
/* Ending speech bubble */
ctx.closePath()

/* CAT HEAD */
/* Setting color to black */
ctx.fillStyle = "#000000"
/* Begin making head */
ctx.beginPath()
/* Making a circle */
ctx.arc(250, 400, 50, 0, 2*Math.PI)
/* Filling in circle black */
ctx.fill()
/* Ending head */
ctx.closePath()

/* CAT EARS */
/* Beginning cat ears */
ctx.beginPath()
/* First point (center of head) */
ctx.moveTo(250, 400)
/* Top point of left ear */
ctx.lineTo(225, 335)
/* Finishing left ear */
ctx.lineTo(200, 400)
/* Back to center */
ctx.lineTo(250, 400)
/* Top point of right ear */
ctx.lineTo(275, 335)
/* Finishing right ear */
ctx.lineTo(300, 400)
/* Back to center */
ctx.lineTo(250, 400)
/* Filling in ears black */
ctx.fill()
/* Ending cat ears */
ctx.closePath()

/* CAT NOSE */
/* Setting fill color pastel pink */
ctx.fillStyle = "#FFD1DC"
/* Beginning kitty booper (nose) */
ctx.beginPath()
/* First point (top left) */
ctx.moveTo(245, 400)
/* Second point (top right) */
ctx.lineTo(255, 400)
/* Third point (bottom) */
ctx.lineTo(250, 408)
/* Closing off kitty booper */
ctx.lineTo(245, 400)
/* Filling in kitty booper pastel pink */
ctx.fill()
/* Ending kitty booper */
ctx.closePath()
/* Setting stroke color pastel pink */
ctx.strokeStyle = "#FFD1DC"
/* Beginning top of lips */
ctx.beginPath()
/* First point (bottom of kitty booper) */
ctx.moveTo(250, 407)
/* Second point (top of lip) */
ctx.lineTo(250, 413)
/* Making line pastel pink */
ctx.stroke()
/* Ending top of lips */
ctx.closePath()

/* CAT EYES */
/* Making fill color white */
ctx.fillStyle = "#FFFFFF"
/* Beginning cat eyeballs */
ctx.beginPath()
/* First eyeball (left) */
ctx.arc(230, 394, 7, 0, 2*Math.PI)
/* Second eyeball (right) */
ctx.arc(270, 394, 7, 0, 2*Math.PI)
/* Making eyeballs white */
ctx.fill()
/* Ending cat eyeballs */
ctx.closePath()
/* Making color pastel green */
ctx.fillStyle = "#A2D991"
/* Beginning cat pupils (looking northeast) */
ctx.beginPath()
/* First pupil (left) */
ctx.arc(232, 393, 4, 0, 2*Math.PI)
/* Second pupil (right) */
ctx.arc(272, 393, 4, 0, 2*Math.PI)
/* Making pupils pastel green */
ctx.fill()
/* Ending cat pupils */
ctx.closePath()

/* CAT MOUTH */
/* Begin Drawing */
ctx.beginPath()
/* Left Side of Curved Mouth */
ctx.arc(258, 407, 10, 0, 3/4*Math.PI+1/10)
/* Draw It */
ctx.stroke()
/* End Drawing */
ctx.closePath()

/* Begin Drawing */
ctx.beginPath()
/* Left Side of Curved Mouth */
ctx.arc(242, 407, 10, 1/4*Math.PI-1/10, Math.PI)
/* Draw It */
ctx.stroke()
/* End Drawing */
ctx.closePath()

/* End */
console.log("gbye")
