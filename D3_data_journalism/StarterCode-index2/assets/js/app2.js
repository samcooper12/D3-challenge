// var log = console.log.bind(console)
// var log = console.log.bind(console)

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

// var g = svg.append("g").attr("transform")
var states = []

// function getStates(d,states){ 
  // var states = []
// states =[]
// var getStates = d3.csv(url, function(d){

        // for (i=0; i < d.length; i++) {
        //   var eachState = d[i]['abbr']
        // console.log(eachState)
        //   states.push(eachState)

        // return states
          // console.log(states)
        
      // }
      // console.log(states)
  // console.log('~~~~~~~~~~~~~~~END OF GETSTATES~~~~~~~~~~~~~~~~~~~~~~')
//   // return states
//   })

// // getStates(url,states)
// // console.log('states')
// console.log(states)

// var namesGet = d3.csv(url, function(d){



//   getStates(d,states)

//   console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

//   return states
// })



d3.csv(url, function(d) {

  //                      g , svg  , 
  // setup x
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
      // .attr("transform", "translate(0," + height + ")")

    .call(d3.axisLeft(y));



// var circles = svg
svg
    .selectAll("circle")
    .data(d)
    .enter()
    .append("circle")
    // .fillText(d.abbr)
      .attr("cx", function (d) { return x(d.poverty); } )
      .attr("cy", function (d) { return y(d.healthcare); } )
      .attr("r", 12)
      // .attr("r", 1.5)
  // svg.append('g')
      // .style("fillText", d['abbr'])
      // .call(g => g.append("text")
      //   .attr("y", (d, i) => d[0] + 5) //"1.35em")
      //   // .attr("y", "0.35em")
      //   .attr("x", (d,i))
      //   // .text(d.abbr));
      //   .text(d => d.abbr))
        


  // var text = svg.selectAll("text")
svg.selectAll("text")
    .data(d)
    .enter()
    .append("text")
// svg.selectAll("text")
       .data(d)
       .enter()
       .append("text")
       .attr("x",function (d) { return x(d.poverty) } )
       // .attr("x",(d, i) => d[0] + 5)
       .attr("y",function (d) { return y(d.healthcare) } )
       .attr("color", "blue")
       .text(d => d.abbr) 




// var text = svg.selectAll("text")
//               .data(d)
//               .enter()
//               .fillText(d.abbr)

              // .textfill(d.abbr)
              // .append("text");
// var textLabels = text
                // .attr("x", function(d) { return d.cx; })
                // .attr("y", function(d) { return d.cy; })
                // .text( function (d) { return "( " + d.cx + ", " + d.cy +" )"; })
//                .attr("font-family", "sans-serif")
//                  .attr("font-size", "20px")
//                  .attr("fill", "red");

                 return svg.node()
})
console.log(svg.node())
