// var delegates = [58, 18, 10, 75, 37];


// d3.select(".chart")
//     .selectAll("div")
//       .data(delegates)
//     .enter().append("div")
//       .style("width", function(d) {
//           return d*10 + "px"; })
//       .text(function(d) { return d; })

// d3.select("body").append("p").text("New paragarph!");

//IDEA: PUT THESE IN A CSV FILE, THEN LOAD IT IN
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




    
