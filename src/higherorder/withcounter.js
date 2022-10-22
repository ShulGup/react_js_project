import React, { Component } from "react";

const Withcounter = (OriginalComponent, increasecounter) => {
  class Withcounter extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    increase = () => {
      this.setState((prevState) => {
        return { count: prevState.count + increasecounter };
      });
    };
    render() {
      return (
        <OriginalComponent
          id="withcounter"
          count={this.state.count}
          increase={this.increase}
          {...this.props}
        />
      );
    }
  }
  return Withcounter;
};

export default Withcounter;
