/* RAW DATA */
//NOTE: must not put any spaces around the commas
var raw = "Alabama,50,true,\
Alaska,28,true,\
American Samoa,9,false,\
Arizona,58,false,\
Arkansas,40,true,\
California,172,false,\
Colorado,37,true,\
Connecticut,28,false,\
Delaware,16,false,\
D.C.,19,true,\
Florida,99,true,\
Georgia,76,true,\
Guam,9,true,\
Hawaii,19,true,\
Idaho,32,true,\
Illinois,69,true,\
Indiana,57,false,\
Iowa,30,true,\
Kansas,40,true,\
Kentucky,45,true,\
Louisiana,46,true,\
Maine,23,true,\
Maryland,38,false,\
Massachusetts,42,true,\
Michigan,59,true,\
Minnesota,38,true,\
Mississippi,39,true,\
Missouri,52,true,\
Montana,27,false,\
Nebraska,36,false,\
Nevada,30,true,\
New Hampshire,23,true,\
New Jersey,52,false,\
New Mexico,24,false,\
New York,95,false,\
North Carolina,72,true,\
North Dakota,28,false,\
N. Marianas,9,true,\
Ohio,66,true,\
Oklahoma,43,true,\
Oregon,28,false,\
Pennsylvania,72,false,\
Puerto Rico,23,true,\
Rhode Island,19,false,\
South Carolina,50,true,\
South Dakota,29,false,\
Tennessee,58,true,\
Texas,155,true,\
Utah,40,false,\
Vermont,16,true,\
Virgin Islands,9,true,\
Virginia,49,true,\
Washington,44,false,\
West Virginia,34,false,\
Wisconsin,42,false,\
Wyoming,29,true,\
"

/* PARSING RAW INTO DATA DICT */
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

/* MAKING BAR CHART */
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


/* FINDING TOTAL DELEGATES*/
d3.select(".totalDelegates")
    .insert("p").attr("class", "total")
    .text("Total Delegates: ")
    .append("p").attr("class", "total")
    .text(function(){
	var total = 0;
	console.log(data);
	for(var i = 0; i<data.length; i++){
	    total+=data[i].count;
	    console.log(total);
	}
	return total;
    })
//total allocated
    .append("p").attr("class", "total")
    .text("Total Delegates: ")
    .append("p").attr("class", "total")
    .text(function(){
	var total = 0;
	console.log(data);
	for(var i = 0; i<data.length; i++){
	    if(data[i].allocated) total+=data[i].count;
	    console.log(total);
	}
	return total;
    })
//total unallocated
    .append("p").attr("class", "total")
    .text("Total Delegates: ")
    .append("p").attr("class", "total")
    .text(function(){
	var total = 0;
	console.log(data);
	for(var i = 0; i<data.length; i++){
	    if (!data[i].allocated) total+=data[i].count;
	    console.log(total);
	}
	return total;
    })

