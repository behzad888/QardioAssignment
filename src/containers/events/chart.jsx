//@flow
import React, {memo, useRef, useEffect, useState} from 'react';
import {Card, NavigationDate} from '../../components';
import * as d3 from 'd3';

function EventChart(props) {
  const containerRef = useRef(null);
  const [chartSize, setChartSize] = useState({
    margin: {top: 50, right: 50, bottom: 50, left: 50},
    height: 300,
    width: 500,
  });
  const [chartSVG, setChartSVG] = useState(null);

  //window resize listener side effect
  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    debugger;
    const containerSizeHandler = e => {
      let margin = {top: 50, right: 50, bottom: 50, left: 50},
        width =
          parseInt(d3.select(containerRef.current).style('width')) -
          margin.left -
          margin.right, // Use the window's width
        height =
          containerRef.current.parentElement.clientHeight -
          margin.top -
          margin.bottom; // Use the window's height
      setChartSize(Object.assign({margin, width, height}));
    };
    // containerSizeHandler();
    window.addEventListener('resize', containerSizeHandler);

    return () => {
      window.removeEventListener('resize', containerSizeHandler);
    };
  }, []);

  useEffect(() => {
    if (chartSVG === null) {
      return;
    }
  }, [chartSVG]);

  useEffect(() => {
    if (chartSVG === null) return;
    // The number of datapoints
    var n = 21;

    // 5. X scale will use the index of our data
    var xScale = d3
      .scaleLinear()
      .domain([0, n - 1]) // input
      .range([0, chartSize.width]); // output

    // 6. Y scale will use the randomly generate number
    var yScale = d3
      .scaleLinear()
      .domain([0, 1]) // input
      .range([chartSize.height, 0]); // output

    // 7. d3's line generator
    var line = d3
      .line()
      .x(function(d, i) {
        return xScale(i);
      }) // set the x values for the line generator
      .y(function(d) {
        return yScale(d.y);
      }) // set the y values for the line generator
      .curve(d3.curveMonotoneX); // apply smoothing to the line

    // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset = d3.range(n).map(function(d) {
      return {y: d3.randomUniform(1)()};
    });
    // 3. Call the x axis in a group tag
    chartSVG
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + chartSize.height + ')')
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    chartSVG
      .append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // 9. Append the path, bind the data, and call the line generator
    chartSVG
      .append('path')
      .datum(dataset) // 10. Binds data to the line
      .attr('class', 'line') // Assign a class for styling
      .attr('d', line); // 11. Calls the line generator

    // 12. Appends a circle for each datapoint
    chartSVG
      .selectAll('.dot')
      .data(dataset)
      .enter()
      .append('circle') // Uses the enter().append() method
      .attr('class', 'dot') // Assign a class for styling
      .attr('cx', function(d, i) {
        return xScale(i);
      })
      .attr('cy', function(d) {
        return yScale(d.y);
      })
      .attr('r', 4);
  }, [chartSVG]);

  useEffect(() => {
    if (!chartSize) return;
    d3.select('svg').remove();
    // 1. Add the SVG to the page and employ #2
    const svg = d3
      .select(containerRef.current)
      .append('svg')
      .attr(
        'width',
        chartSize.width + chartSize.margin.left + chartSize.margin.right
      )
      .attr(
        'height',
        chartSize.height + chartSize.margin.top + chartSize.margin.bottom
      )
      .append('g')
      .attr(
        'transform',
        'translate(' + chartSize.margin.left + ',' + chartSize.margin.top + ')'
      );

    setChartSVG(svg);
  }, [chartSize]);

  return (
    <Card header={<NavigationDate title="Sat Jun 1-7" />}>
      <div ref={containerRef}> </div>
    </Card>
  );
}

export default memo(EventChart);
