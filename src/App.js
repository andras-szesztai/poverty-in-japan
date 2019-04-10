import React, { Component } from "react";
import "./App.css";

import SlopeGraph from "./components/SlopeGraph";
import ChartContainer from "./components/ChartContainer";
import ContinueButton from "./components/ContinueButton"

import povertyRateTrending from "./data/povertyRateTrending.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        slopeGraphContainer: {
            width: undefined,
            height: undefined
        },
        slopeYearFilter : 1992

    };
  }

  render() {

    const { slopeGraphContainer, slopeYearFilter } = this.state,
          filteredPovertyTrending = povertyRateTrending.filter(d => d.Year <= slopeYearFilter )

    console.log(filteredPovertyTrending)

    return (
      <div className="App">
        <section>

        </section>
        <section>
          <div className="second-section-container">
            <ContinueButton handleClick = {() => this.setState({slopeYearFilter: 2002})} color='red'/>
            <ContinueButton handleClick = {() => this.setState({slopeYearFilter: 2012})} color='blue'/>
                <ChartContainer
                  className= "slope-graph-container"
                  updateDimensions={(height, width) => this.setState({ slopeGraphContainer: { height, width }})}
                >
                  <SlopeGraph
                    className = "slopegraph-canvas"
                    data = {filteredPovertyTrending}
                    width = {slopeGraphContainer.width}
                    height = {slopeGraphContainer.height}
                  />
              </ChartContainer>
            </div>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
      </div>
    );
  }
}

export default App;
