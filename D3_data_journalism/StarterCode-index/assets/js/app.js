// @TODO: YOUR CODE HERE!
var url = 'assets/data/data.csv'


var svgWidth = 960;
var svgHeight = 500;

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// x.domain(d3.extent(data, function(d) { return d.date; }));
	// y.domain([0, d3.max(data, function(d) { return d.close; })]);
var data
// console.log(url)
// load data
// d3.csv("cereal.csv", function(error, data) {


	// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.povertyMoe); })
    .y(function(d) { return y(d.SalePrice); });



var circles = svg.selectAll("circle")
// var circles = svgContainer.selectAll("circle")
	.data(jsonCircles)
	.enter()
	.append("circle");

d3.csv('assets/data/data.csv', function(error, data) {

// 	data.forEach(function(d) {
// 		print(d)
//     	// d.age = +d.age;
//     	var pov = {}
//     	var add = d
//     	pov.push(add, )
//     	var lack_healthcare = {}
//     	// d.smokes = +d.smokes;
// //    console.log(d);
//   });

	var poverty = data['poverty']
	var healthcare = data['healthcare']
	console.log(poverty)
	console.log(healthcare)

	var x = d3.scaleLinear()
    .domain([0, 4000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

     var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));
// Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.povertyMoe; }));
  y.domain([0, d3.max(data, function(d) { return d.SalePrice; })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);``

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));


	svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.povertyMoe); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

});
