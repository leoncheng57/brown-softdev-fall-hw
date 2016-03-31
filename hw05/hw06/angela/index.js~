var data  = [-1,7,8,7,1,-2,-1,11,3,2,4,-2,-1,50,0,0,0,-2,-1,14,6,7,1,-2,-1,36,13,1,0,-2,-1,11,12,5,0,-2,-1,16,14,9,0,-2,-1,40,18,14,0,-2,-1,22,4,8,8,-2,-1,8,13,17,0,-2,-1,13,15,12,0,-2,-1,33,16,9,0,-2,-1,48,104,3,0,-2,-1,8,0,0,8,-2,-1,17,8,16,5,-2,-1,9,24,6,1,-2,-1,17,15,7,7,-2,-1,18,18,5,0,-2,-1,9,12,0,2,-2,-1,0,0,23,0,-2,-1,11,7,1,0,-2,-1,12,20,0,0,-2,-1,25,17,0,17,-2,-1,24,13,0,0,-2,-1,0,0,10,9,-2,-1,1,9,1,0,-2,-1,99,0,0,0,-2,-1,51,9,0,5,-2,-1,25,5,0,0,-2,-1,29,27,6,9,-2,-1,9,0,0,0,-2,-1,0,0,0,66,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2,-1,0,0,0,0,-2];
var count = 0;
var states=-1;
var s = ["Iowa - 30", "New Hampshire - 23", "South Carolina - 50", "Nevada - 30", "Alabama - 50", "Alaska - 28", "Arkansas - 40", "Georgia - 76", "Massachusetts - 42", "Minnesota - 38", "Oklahoma - 43", "Tennessee - 58", "Texas - 155", "Vermont - 16", "Virginia - 49", "Kansas - 40", "Kentucky - 46", "Louisiana - 46", "Maine - 23", "Puerto Rico - 23", "Hawaii 19", "Idaho - 32", "Michigan - 59", "Mississippi - 40", "District of Columbia - 19", "Wyoming - 29", "Florida - 99", "Illinois - 69", "Missouri - 52", "North Carolina - 72", "Northern Marina Islands - 9", "Ohio - 66", "Colorado - 37", "Virgin Islands - 9", "American Samoa - 9", "Arizona - 58", "Utah - 40", "North Dakota - 28", "Wisconsin - 42", "New York - 95", "Connecticut - 28", "Delaware - 16", "Maryland - 38", "Pennsylvania - 71", "Rhode Island - 19", "Indiana - 57", "Nebraska - 36", "West Virginia - 34", "Oregon - 28", "Washington - 44", "California - 172", "Montana - 27", "New Jersey - 51", "New Mexico - 24", "South Dakota - 29"]

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) {
      if(d!=-1){
        if(d==0){
          return "5px";
        }
        return d*7 + "px";
      }
      else{
        return "100px";
      }
    })
    .style("display", function(){
      if(count<=5){
        //console.log(count);
        if(count==5){
          //console.log(count);
          count = 0;
          return "block";
        } else{
          //console.log(count);
          count++;
          //console.log("here");
          return "inline-block";
        }
      }
    })
    .style("visibility", function(d){
      if(d==-2){
        return "hidden";
      }
    })
    .style("margin-right", function(){
      return "-1px";
    })
    
    .style("background-color", function(d){
      if(d==-1 || d==-2){
        return "transparent";
      } console.log(count);
      if(count<=3){
        if(count==3){
          count=0;
          return "#FE9898";
        } else if(count==2){
          count++;
          return "#D86161";
        } else if(count==1){
          count++;
          return "#B23535";
        } else if(count==0){
          count++;
          return "#8C1515";
        }
      }
    })
    
    .style("color", function(d){
      if(d==-1 || d==-2){
        return "#262626";
      }
    })
    .style("text-align", function(d){
      if(d==-1){
        return "left";
      }
    })
    .text(function(d) {
      //console.log(d + ", " + count);
      if(d>=0){
        return d;
      } else if(d==-1){
        states++;
        return s[states];
      }
    });