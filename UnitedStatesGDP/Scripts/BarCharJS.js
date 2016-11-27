/// <reference path="d3/d3.min.js" />
var data = [10, 20, 30, 40, 50];

var bodySelection = d3.select('body').append("svg")
    .attr("width", 500)
    .attr("height", 1000)
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect").attr("x", 0)
    .attr("y", 0)
    .attr("fill", "lightblue")
    .attr('width', 50)
    .attr("height", 100)
.attr("x", function (d, i) {
    return i * 55;
})
    .text(function (d) {
        return d;
    });


