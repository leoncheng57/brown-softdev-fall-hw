//Raw data input as string
//NOTE: must not put any spaces around the commas
var raw = "Alabama,50,false,\
Alaska,28,false,\
American Samoa,9,false,\
Arizona,58,false,\
Arkansas,40,false,\
California,172,false,\
Colorado,37,false,\
Connecticut,28,false,\
Delaware,16,false,\
DC,19,false,\
Florida,99,true,\
"

//Parsing the raw string into data
var list = raw.split(","); //used to help parse the raw string
var data = []; //A dictionary with all the data in it (state, count, allocated)
for (var i = 0; i+2<list.length; i++){
    if (i%3==0) {
    var dict = {};
	dict.state = list[i];    
	dict.count = Number(list[i+1]); 
	dict.allocated = (list[i+2]=="true");
	//console.log(dict);
	data.push(dict);
    }
}

var scaleWidth = 5; //how much to scale up the width by
//to make bars prettier on screen
d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d){
	return d.count*scaleWidth + "px";})
    .style("background-color", function(d){
	if(d.allocated) return "red";
	else return "#FF6699"; //pink
    })
    .text(function(d){
	return d.state + ": " + d.count;
    })

//finding total delegate count
var total = 0;
console.log(data);
for(var i = 0; i<data.length; i++){
    total+=data[i].count;
    console.log(total);
}
d3.select("body")
    .append("p")
    .text("Total Delegates: "+total)
    .attr("class", "total");



    


