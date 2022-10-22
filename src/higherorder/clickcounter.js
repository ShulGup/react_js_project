import React, { Component } from "react";
import Withcounter from "./withcounter";
class Clickcounter extends Component {
  render() {
    const { count, increase } = this.props;
    return (
      <div>
        {this.props.name}
        <button onClick={increase}>click {count} counter</button>
      </div>
    );
  }
}

export default Withcounter(Clickcounter, 8);
