var url = 'assets/data/data.csv'

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 800 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
// .append("g")
  //   .attr("transform",
  //         "translate(" + margin.left + "," + margin.top + ")");


var states = []

// D3

d3.csv(url, function(d) {



  // setup x
  var xValue = function(d) { return d['healthcare']}, // data -> value
      xScale = d3.scaleLinear().range([0, width]), // value -> display
      // xMap = function(d) { return xScale(xValue(d));}, // data -> display
      // xAxis = d3.svg.axis().scale(xScale).orient("bottom");
      xAxis = d3.axisBottom(xScale)
  // setup y
  var yValue = function(d) { return d["poverty"];}, // data -> value
    yScale = d3.scaleLinear().range([height, 0]), // value -> display
    // yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.axisBottom(yScale);

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 26])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 30])
    .range([ height, 0]);
  svg.append("g")
      // .attr("transform", "translate(0," + height + ")")

    .call(d3.axisLeft(y));
//////////
//////////
//////////
// var circles = svg
    svg
        .selectAll("circle")
        .data(d)
        .enter()
        .append("circle")
        // .fillText(d.abbr)
        // .fill("none")
        .attr("fill","none")
        .attr("stroke", "steelblue")
          .attr("cx", function (d) { return x(d.poverty); } )
          .attr("cy", function (d) { return y(d.healthcare); } )
          .attr("r", 20)


  // var text = svg.selectAll("text")
svg.selectAll("text")
    .data(d)
    .enter()
    .append("text")
// svg.selectAll("text")
       // .data(d)
       // .enter()
       .append("text")
       .attr("fill","white")
       .attr("font-style","strong")
       // .attr("x","50%")
       
       // .attr("x",function (d) { return xScale(d.poverty) } )
       .attr("x",function (d) { return x(d.poverty) } )

       
       // .attr("y",function (d) { return yScale(d.healthcare) } )
       .attr("y",function (d) { return y(d.healthcare) } )



       .attr("dominant-baseline","central" )
       .attr("font-size","16px" )
       .attr("dominant-baseline","middle" )
       .text(d => d.abbr) 


       // for(i=0;i < d.lengtht; i++){
       //  console.log(d[i][abbr])
       // }

var test = svg.selectAll("text")
console.log(test)
       console.log(svg.node())
    return svg.node()
})
console.log(svg.node())
