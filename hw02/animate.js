// Leon Cheng
// SoftDev2 pd3
// HW02 -- Circular
// 2016-02-22

if (growing) (radius = radius+1);
else (radius = radius-1);

if (radius == c.width/2)
   growing = false;
else if (radius == 0){
     growing = true;
}
ctx.beginPath();
ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

window.requestAnimationFrame( drawDot );

};
