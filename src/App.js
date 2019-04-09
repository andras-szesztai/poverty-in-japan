import React, { Component } from "react";
import "./App.css";

import SlopeGraph from "./components/SlopeGraph";
import ChartContainer from "./components/ChartContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        slopeGraphContainer: {
            width: undefined,
            height: undefined
        },

    };
  }

  render() {

    const { slopeGraphContainer } = this.state

    return (
      <div className="App">
        <section>

        </section>
        <section>
          <div className="second-section-container">
            <div className="second-section-text" />
              <ChartContainer
                className= "slope-graph-container"
                updateDimensions={(height, width) => this.setState({ slopeGraphContainer: { height, width }})}
              />
              <SlopeGraph
                width = {slopeGraphContainer.width}
                height = {slopeGraphContainer.height}
              />
            </div>
        </section>
        <div className="image-container"></div>
        <section>
        </section>
        <div className="image-container"></div>
        <section>
        </section>
        <div className="image-container"></div>
        <section>
        </section>
        <div className="image-container"></div>
      </div>
    );
  }
}

export default App;
