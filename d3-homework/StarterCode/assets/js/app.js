var data 
var svgWidth = 960;
var svgHeight = 500;

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var xValue = function(d) { return d.age;}, // data -> value
    // xScale = d3.scale.linear().range([0, width]), // value -> display d3.scaleLinear 
    xScale = d3.scaleLinear().range([0, width]), // value -> display

    xMap = function(d) { return xScale(xValue(d));}, // data -> displays

    // xAxis = d3.scale(xScale).orient("bottom");
    xAxis = d3.axisBottom(xScale)

    // 3.scale(xScale).orient("bottom");

var yValue = function(d) { return d.smokes;}, // data -> value
    yScale = d3.scaleLinear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    // yAxis = d3.svg.axis().scale(yScale).orient("left");
    yAxis = d3.axisLeft(yScale)

var cValue = function(d) { return d.state },
     color = d3.scaleOrdinal(d3.schemeCategory10);

// var tooltip = d3.select("body").append("div")
//     .attr("class", "tooltip")
//     .style("opacity", 0);




// var svg = d3.select("body").append("svg")
// var b = d3.select("body")
var svg = d3.selectAll("#scatter").append("svg")
// var svg = d3.selectAll("scatter").append("svg")
var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// var xValue = function(d) { return d.age;}, // data -> value
//     xScale = d3.scale.linear().range([0, width]), // value -> display
//     xMap = function(d) { return xScale(xValue(d));}, // data -> display
//     xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// var yValue = function(d) { return d.smokes;}, // data -> value
//     yScale = d3.scale.linear().range([height, 0]), // value -> display
//     yMap = function(d) { return yScale(yValue(d));}, // data -> display
//     yAxis = d3.svg.axis().scale(yScale).orient("left");

// var cValue = function(d) { return d.state;},
//     color = d3.scale.category10();


var url = 'assets/data/data.csv'

var data = d3.csv(url).then(function(data) {
  return data })

// data = data.value

d3.csv(url).then(function(data) {


// var smokes = [];
// var age = [];
console.log(data)

data.forEach(function(d) {
    d.age = +d.age;
    d.smokes = +d.smokes;
//    console.log(d);
  });

  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

// fData.forEach(function(data) {
//     data.smokes = +data.smokes;
//     data.age = +data.age;
//   });

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      // .attr("class", "label")
      // .attr("x", width)
      // .attr("y", -6)
      // .style("text-anchor", "end")
      .text("Age");
  							// console.log(data)
  							// console.log(data.smokes)



svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      // .attr("transform", "translate(0," + height + ")")

     .selectAll("text")
    // .data(columns)
    // .join("text")
    .append("text")
      // .attr("transform", (d, i) => `translate(${i * size},${i * size})`)
      // .attr("x", padding)
      // .attr("y", padding)
      // .attr("dy", ".71em")
      .text("smokes");

var x = d3.scaleLinear()
    // .domain([0, 40])
    .domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

var y = d3.scaleLinear()
    // .domain([0, 40])
    .domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

svg.append('g')
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    //   .attr("cx", function (d) { return x(d.age); } )
    //   .attr("cy", function (d) { return y(d.smokes); } )
    //   .attr("r", 10)
    //   .attr("fill", "none")
    //   .attr("stroke", "black")

var circles = svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
      .attr("cx", function (d) { return x(d.age); } )
      .attr("cy", function (d) { return y(d.smokes); } )
      .attr("r", 10)
      // .attr("fill", "none")
      // .attr("stroke", "black")



var circleLabels = svg.selectAll("text").data(data).enter().append("text");

circleLabels
    // .attr("cx", function(d,i) { return (i+1)*25; })
    // .attr("cy", function(d,i) { return (i+1)*25; })
    .attr("dx", function (d) { return x(d.age); } )
    .attr("dy", function (d) { return y(d.smokes); } )
// var names = circles.selec


circleLabels.text(function(d,i) { return d.abbr; });
circleLabels.style("fill","red");


// name.text("test")

      // .text(data.abbr)
// svg.selectAll("text")
//   .attr("fill","black")
//   // .data(data.abbr)
//   .property("value",data.abbr)


// svg.selectAll("txt")
//   .append()
//   .data(data)
//   // .join("tag")
//   .text(data.abbr)

  // draw dots
  // svg.append(".dot")
  // // svg.selectAll(".dot")
  //     .data(data)
  //   .enter().append("circle")
  //     .attr("class", "dot")
  //     .attr("r", 3.5)
  //     .attr("cx", xMap)
  //     .attr("cy", yMap)
  //     .style("fill", "blue")
      // .style("fill", function(d) { return color(cValue(d));}) 
      // .on("mouseover", function(d) {
      //     tooltip.transition()
      //          .duration(200)
      //          .style("opacity", .9);
      //     tooltip.html(d.age + "<br/> (" + xValue(d) 
	     //    + ", " + yValue(d) + ")")
      //          .style("left", (d3.event.pageX + 5) + "px")
      //          .style("top", (d3.event.pageY - 28) + "px");
      // })
      // .on("mouseout", function(d) {
      //     tooltip.transition()
      //          .duration(500)
      //          .style("opacity", 0);
      // });
function dada(data){
  return data
}

data = dada(data)
return data, svg

}) 

// console.log(data)
// }).catch(function(error) {
//   console.log(error);
// });
