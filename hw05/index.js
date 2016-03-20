// var delegates = [58, 18, 10, 75, 37];


// d3.select(".chart")
//     .selectAll("div")
//       .data(delegates)
//     .enter().append("div")
//       .style("width", function(d) {
//           return d*10 + "px"; })
//       .text(function(d) { return d; })

// d3.select("body").append("p").text("New paragarph!");


var data = [
    ["New York", 320, true],
    ["California", 310, false],
    ["Texas", 421, true],
    ["New Hampshire", 942, true],
    ["Washington", 321, false],
]

for (var i = 0; i<data.length; i++){
    console.log(data[i]);
}


var data2 = "New York,320,true,\
California,310,false,\
Texas,421,true,\
New Hampshire,942,true,\
Washington,321,false,\
"

var data3 = data2.split(",");
for (var i = 0; i<data3.length; i++){
    if (i%3==0) console.log("state: " + data3[i]);
    if (i%3==1) console.log("count: " + data3[i]);
    if (i%3==2) console.log("allocated: "+data3[i]);
}






var better = [
    { state: "New York", count: 900, allocated: true},
    { state: "California", count: 410, allocated: false},
    { state: "Texas", count: 530, allocated: true},
    { state: "New Hampshire", count: 310, allocated: true},
    { state: "Washington", count: 202, allocated: false},
];

d3.select(".chart")
    .selectAll("div")
    .data(better)
    .enter().append("div")
    .style("width", function(d){
	return d.count + "px";})
    .style("background-color", function(d){
	if(d.allocated) return "red";
	else return "#FF6699"; //pink
    })
    .text(function(d){
	return d.state + ": " + d.count;
    })



    


