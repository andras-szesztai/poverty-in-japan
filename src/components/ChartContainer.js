import React, { Component } from "react";


class ChartContainer extends Component {

  componentDidMount(){
    if (this.props.updateDimensions) {
    window.addEventListener("resize", this.handleResize)
  }
  this.handleResize()
}

  handleResize = () => {
    this.props.updateDimensions(
      this.parent.clientHeight,
      this.parent.clientWidth
    );
  }

  render() {
    return (
      <div ref={node => (this.parent = node)} className={this.props.className}>

      </div>
    );
  }
}

export default ChartContainer;
