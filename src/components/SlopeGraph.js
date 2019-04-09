import React, { Component } from "react";

import { select } from "d3-selection";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { extent } from "d3-array";

import { appendArea, updateDimensions } from "./functionsGraphs";

class SlopeGraph extends Component {
  componentDidUpdate() {
    const { width, height } = this.props;

    this.initVis();
    // console.log(width)
    // console.log(height)
  }

  initVis() {
    const svg = select(this.node),
      { data, width, height, margin } = this.props,
      { chartWidth, chartHeight } = updateDimensions(
        svg,
        height,
        width,
        margin
      );

    appendArea(svg, "slopegraph-chart-area", margin.left, margin.top);

    this.xScale = scaleOrdinal().range([0, chartWidth]).domain(data.map(d => d.Year))
    this.yScale = scaleLinear().range([chartHeight, 0]).domain(extent(data, d => d["Poverty rate"]))




    console.log(this.xScale.domain())
    console.log(this.yScale.domain())

  }

  render() {
    return (
      <div>
        <svg ref={node => (this.node = node)} />
      </div>
    );
  }
}

SlopeGraph.defaultProps = {
  margin: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  }
};

export default SlopeGraph;
