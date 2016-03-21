/* RAW DATA */
//NOTE: must not put any spaces around the commas
/*
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
*/

var rawDemocrats = "Alabama,58,true,\
Alaska,18,true,\
Amer. Samoa,10,false,\
Arizona,75,false,\
Arkansas,37,true,\
California,476,false,\
Colorado,77,true,\
Connecticut,65,false,\
Delaware,27,false,\
D.C.,37,true,\
Florida,238,true,\
Georgia,112,true,\
Guam,11,true,\
Hawaii,31,true,\
Idaho,24,true,\
Illinois,190,true,\
Indiana,79,false,\
Iowa,54,true,\
Kansas,37,true,\
Kentucky,53,true,\
Louisiana,61,true,\
Maine,30,true,\
Maryland,105,false,\
Massachusetts,121,true,\
Michigan,152,true,\
Minnesota,94,true,\
Mississippi,41,true,\
Missouri,88,true,\
Montana,22,false,\
Nebraska,31,false,\
Nevada,39,true,\
New Hampshire,32,true,\
New Jersey,126,false,\
New Mexico,38,false,\
New York,277,false,\
North Carolina,120,true,\
North Dakota,19,false,\
N. Marianas,11,true,\
Ohio,165,true,\
Oklahoma,42,true,\
Oregon,64,false,\
Pennsylvania,181,false,\
Puerto Rico,58,true,\
Rhode Island,31,false,\
South Carolina,57,true,\
South Dakota,20,false,\
Tennessee,77,true,\
Texas,237,true,\
Utah,28,false,\
Vermont,23,true,\
Virgin Islands,11,true,\
Virginia,112,true,\
Washington,102,false,\
West Virginia,35,false,\
Wisconsin,89,false,\
Wyoming,17,true,\
Democrats Abroad,17,false,\
Unassigned,1,false,\
"

/* PARSING RAW INTO DATA DICT */
var list = rawDemocrats.split(","); //used to help parse the raw string
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
    .append("p")
    .text(function(){
	var total = 0;
	console.log(data);
	for(var i = 0; i<data.length; i++){
	    total+=data[i].count;
	    console.log(total);
	}
	return "Total Delegates: " + total;
    })
//total allocated
    .append("p")
    .text(function(){
	var total = 0;
	console.log(data);
	for(var i = 0; i<data.length; i++){
	    if(data[i].allocated) total+=data[i].count;
	    console.log(total);
	}
	return "Allocated: " + total;
    })
//total unallocated
    .append("p")
    .text(function(){
	var total = 0;
	console.log(data);
	for(var i = 0; i<data.length; i++){
	    if (!data[i].allocated) total+=data[i].count;
	    console.log(total);
	}
	return "Unallocated: " + total;
    })

