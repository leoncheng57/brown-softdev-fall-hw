//Raw data input as string
var raw = "New York,320,true,\
California,310,false,\
Texas,421,true,\
New Hampshire,942,true,\
Washington,321,false,\
"

//Parsing the raw string into data
var list = raw.split(","); //used to help parse the raw string
var data = []; //A dictionary with all the data in it (state, count, allocated)
for (var i = 0; i+2<list.length; i++){
    if (i%3==0) {
    var dict = {};
	dict.state = list[i];    
	dict.count = list[i+1]; 
	dict.allocated = (list[i+2]=="true");
	console.log(dict);
	data.push(dict);
    }
}

d3.select(".chart")
    .selectAll("div")
    .data(data)
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



    


