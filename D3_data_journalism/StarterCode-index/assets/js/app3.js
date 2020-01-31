var url = 'assets/data/data.csv'

d3.csv(url, function(d) {


//Circle Data Set
var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];

//Create the SVG Viewport
var svgContainer = d3.select("body").append("svg")
                                     .attr("width",200)
                                     .attr("height",200);

//Add the SVG Text Element to the svgContainer
var text = svgContainer.selectAll("text")
                        .data(circleData)
                        .enter()
                        .append("text");

1/Add SVG Text Element Attributes
var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.cy; })
                 .text( function (d) { return "( " + d.cx + ", " + d.cy +" )"; })
                 .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                 .attr("fill", "red");


});