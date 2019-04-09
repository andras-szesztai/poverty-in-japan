import React, { Component } from "react"

import { select } from 'd3-selection'
import { scaleLinear, scaleOrdinal } from 'd3-scale'

import { appendArea, updateDimensions } from './functionsGraphs'

class SlopeGraph extends Component {



  componentDidUpdate(){
    const { width, height } = this.props

    this.initVis()
    // console.log(width)
    // console.log(height)
  }

  initVis(){

    const svg = select(this.node),
          { width, height, margin } = this.props,
          {chartWidth, chartHeight} = updateDimensions(svg, height, width, margin)

    console.log(chartWidth)


  }


  render() {
    return (
      <div>
        <svg
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

SlopeGraph.defaultProps = {
  margin : {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  }
}

export default SlopeGraph;
