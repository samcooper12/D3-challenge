var url = 'assets/data/data.csv'

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 800 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv(url, function(d) {

  console.log(d)
  var xValue = function(d) { return d['healthcare']}, // data -> value
    xScale = d3.scaleLinear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    // xAxis = d3.svg.axis().scale(xScale).orient("bottom");
    xAxis = d3.axisBottom(xScale)

// setup y
var yValue = function(d) { return d["poverty"];}, // data -> value
    yScale = d3.scaleLinear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
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
    .call(d3.axisLeft(y));

    //scale

  // x.domain(d3.extent(data['povertyMoe, function(d) { return d.povertyMoe; }));
  // y.domain([0, d3.max(data, function(d) { return d.SalePrice; })]);

  // Add dots
svg.append('g')
    .selectAll("dot")
    .data(d)
    .enter().append("circle")
    // .fillText(d.abbr)
      .attr("cx", function (d) { return x(d.poverty); } )
      .attr("cy", function (d) { return y(d.healthcare); } )
      .attr("r", 12)
      // .attr("r", 1.5)
  // svg.append('g')
      .style("fillText", d['abbr'])
      .call(g => g.append("text")
        .attr("dy", "1.35em")
        // .attr("dy", "0.35em")
        // .attr("x", 10)
        // .text(d.abbr));
        .text(d => d.abbr))
        // .moveToFront(text);
        // .fillText(d => d.abbr));
      // .fillText(d.abbr)

// var text = svg.selectAll("text")
//               .data(d)
//               .enter()
//               .fillText(d.abbr)

              // .textfill(d.abbr)
              // .append("text");

//Add SVG Text Element Attributes
 // var textLabels = text
 //               .attr("cx", function(d) { return x(d.poverty); })
 //           .attr("cy", function(d) { return y(d.healthcare); })
 //              .text( function (d) { return d.abbr })
 //            .attr("font-family", "sans-serif")
 //              .attr("font-size", "20px")
 //               .attr("fill", "red");


})
