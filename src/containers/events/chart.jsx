//@flow
import React, {memo, useRef, useEffect, useState} from 'react';
import {Card, NavigationDate} from '../../components';
import {useDateSet} from './hooks';
import * as d3 from 'd3';

const dayCount = 7;
function EventChart(props) {
  const containerRef = useRef(null);
  const [chartSVG, setChartSVG] = useState(null);
  const [busy, setBusy] = useState(null);
  const [currentDate, onChangeDay] = useDateSet();
  const [chartData, setChartData] = useState({
    items: [],
    maxEventScheduledCound: 16,
  });
  const [chartSize, setChartSize] = useState({
    margin: {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    },
    height: 250,
    width: 500,
  });

  //window resize listener side effect
  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    debugger;
    const containerSizeHandler = e => {
      let margin = {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        },
        width =
          parseInt(d3.select(containerRef.current).style('width')) -
          margin.left -
          margin.right, // Use the window's width
        height =
          containerRef.current.parentElement.clientHeight -
          margin.top -
          margin.bottom; // Use the window's height
      setChartSize(
        Object.assign({
          margin,
          width,
          height,
        })
      );
    };
    // containerSizeHandler();
    window.addEventListener('resize', containerSizeHandler);

    return () => {
      window.removeEventListener('resize', containerSizeHandler);
    };
  }, []);

  useEffect(() => {
    const fetchDate = async () => {
      let dataKeeper = [];
      let max = 0;
      let stableIndex = 0;
      setBusy(true);
      for (let index = 0; index < dayCount; index++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + index);
        const stringDate = [
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
        ].join('-');

        fetch(
          `${process.env.NEXT_STATIC_API_URL}agenda/${stringDate}?key=${process.env.NEXT_STATIC_API_KEY}&format=json`
        ).then(res => {
          res.json().then(data => {
            dataKeeper.push(data.options);
            stableIndex++;

            if (stableIndex >= dayCount) {
              let count = 0;
              let temp = [];
              dataKeeper.forEach(options => {
                options
                  .map(c => c.period)
                  .forEach(item => {
                    count += item.maximum - item.remaining;
                  });
                max = count > max ? count : max;
                temp.push({y: count});
              });
              if (max === 0) {
                max = max + 16;
              } else {
                max = max + 5;
              }
              setChartData({
                items: temp,
                maxEventScheduledCound: max,
              });
              setBusy(false);
            }
          });
        });
      }
    };

    fetchDate();
  }, [currentDate]);

  useEffect(() => {
    if (chartSVG === null) {
      return;
    }
    var xScale = d3
      .scaleLinear()
      .domain([1, dayCount])
      .range([0, chartSize.width]);

    var yScale = d3
      .scaleLinear()
      .domain([0, chartData.maxEventScheduledCound])
      .range([chartSize.height, 0]);

    // 7. d3's line generator
    var line = d3
      .line()
      .x(function(d, i) {
        return xScale(i + 1);
      })
      .y(function(d) {
        return yScale(d.y);
      })
      .curve(d3.curveMonotoneX);

    chartSVG
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + chartSize.height + ')')
      .call(d3.axisBottom(xScale));

    chartSVG
      .append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale));

    chartSVG
      .append('path')
      .datum(chartData.items)
      .attr('class', 'line')
      .attr('d', line);

    chartSVG
      .selectAll('.dot')
      .data(chartData.items)
      .enter()
      .append('circle') // Uses the enter().append() method
      .attr('class', 'dot') // Assign a class for styling
      .attr('cx', function(d, i) {
        return xScale(i + 1);
      })
      .attr('cy', function(d) {
        return yScale(d.y);
      })
      .attr('r', 4);
  }, [chartSVG]);

  useEffect(() => {
    if (!chartSize) return;
    d3.select('svg').remove();
    // Add the SVG to the page
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
  }, [chartData, chartSize]);

  const SevenDays = () => {
    let date = new Date(currentDate);
    date.setDate(currentDate.getDate() + (dayCount - 1));
    return date.toDateString();
  };

  return (
    <Card
      header={
        <NavigationDate
          isBusy={busy}
          onNextClick={() =>
            onChangeDay(currentDate.getDate() + (dayCount - 1))
          }
          onPrevClick={() =>
            onChangeDay(currentDate.getDate() - (dayCount - 1))
          }
          title={currentDate.toDateString() + ' - ' + SevenDays()}
        />
      }>
      <div ref={containerRef}> </div>
    </Card>
  );
}

export default memo(EventChart);
