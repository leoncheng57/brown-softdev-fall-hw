// Leon Cheng
// SoftDev2 pd3
// HW02 -- Circular
// 2016-02-22


console.log("beginning js file")


//Get Canvas Element
var c = document.getElementById("pad");
//Get 2d Context
var ctx = c.getContext("2d");

var growing = true;
var radius = c.height/2;

if (growing){
  radius += 1;
}
else{
  radius -= 1;
}

// if (radius == c.width/2)
//    growing = false;
// else if (radius == 0){
//      growing = true;
// }
// ctx.beginPath();
// ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
// ctx.stroke();
// ctx.fill();
//
// window.requestAnimationFrame( drawDot );
//
// };
//TODO: ADD COMMENTS
