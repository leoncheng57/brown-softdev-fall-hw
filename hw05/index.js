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
    { state: "New York", count: 900},
    { state: "California", count: 410},
    { state: "Texas", count: 130},
    { state: "New Hampshire", count: 310},
    { state: "Washington", count: 102},
];

d3.select(".chart")
    .selectAll("div")
    .data(better)
    .enter().append("div")
    .style("width", function(d){
	return d.count + "px";})
    .text(function(d){
	return d.state + ": " + d.count;
    })


    
