import React, { Component } from "react";

import { select } from "d3-selection";
import { scaleLinear, scalePoint } from "d3-scale";
import { line } from "d3-shape";
import 'd3-transition'


import { appendArea, updateDimensions, appendxAxisText, appendyAxisText } from "./functionsGraphs";
import { dataBind } from "./functionsSlopeGraph";

class SlopeGraph extends Component {
  constructor(props){
    super(props)
    this.state = {
        firstRender: true
    }
  }


  componentDidUpdate(prevProps) {
    const { width, height, data } = this.props,
          { firstRender } = this.state

    console.log(data.length)

    if(firstRender){
        this.initVis();
        this.setState(() => ({firstRender : false}))
    }

    if( prevProps.data.length !== data.length ){
      this.updateVis()
    }

    // console.log(width)
    // console.log(height)
  }

  initVis() {
    const svg = select(this.node),
      { data, width, height, margin, transition } = this.props,
      { chartWidth, chartHeight } = updateDimensions(
        svg,
        height,
        width,
        margin
      )

    appendArea(svg, "slopegraph-chart-area", margin.left, margin.top);
    this.chartArea = svg.select(".slopegraph-chart-area")

    this.xScale = scalePoint().range([0, chartWidth]).domain([1992, 2002, 2012])
    this.yScale = scaleLinear().range([chartHeight, 0]).domain([.04, .37])

    appendxAxisText(this.chartArea, this.xScale, 1992, 0, chartHeight)
    appendxAxisText(this.chartArea, this.xScale, 2002, 0, chartHeight)
    appendxAxisText(this.chartArea, this.xScale, 2012, 0, chartHeight)

    appendyAxisText(this.chartArea, this.xScale, this.yScale, 1992, .08, '8%')
    appendyAxisText(this.chartArea, this.xScale, this.yScale, 2002, .22, '22%')
    appendyAxisText(this.chartArea, this.xScale, this.yScale, 2012, .36, '36%')

    this.linePath = line()
          .x( d => this.xScale(d.Year))
          .y( d => this.yScale( d["Poverty rate"]))

    const { circles } = dataBind(this.chartArea, data)

    circles.enter()
          .append('circle')
          .attr('class', '.prefecture-circle')
          .attr('cx',d => this.xScale(d.Year))
          .attr('cy',d => this.yScale(d["Poverty rate"]))
          .attr('r', 0)
          .attr('fill', '#333333')
              .merge(circles)
              // .transition()
              // .duration(1000)
              .attr('r', 5)

  }

  updateVis(){

    const   { data,  } = this.props,
            { circles, lines } = dataBind(this.chartArea, data)

    lines.enter()
          .append('path')
          .attr('class', '.prefecture-line')
          .attr('stroke', '#cccccc')
          .attr('stroke-width', 1)
          .attr('stroke-opacity', 1)
          .attr('fill', 'none')
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr('d', d => this.linePath(d.values))
          .lower()


  }

  render() {
    return (
      <div>
        <svg ref={node => (this.node = node)} className= {this.props.className} />
      </div>
    );
  }
}

SlopeGraph.defaultProps = {
  margin: {
    top: 10,
    right: 100,
    bottom: 20,
    left: 100
  },
  transition: {
    long: 2000,
    medium: 1000,
    short: 300
  }
};

export default SlopeGraph;
