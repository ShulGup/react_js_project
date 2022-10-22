import React, { Component } from "react";
import Withcounter from "./withcounter";
class Mouseover extends Component {
  render() {
    const { count, increase } = this.props;
    return (
      <div>
        <h2 onMouseOver={increase} data-testid="h2_test">
          click {count} counter
        </h2>
      </div>
    );
  }
}

export default Withcounter(Mouseover, 7);
