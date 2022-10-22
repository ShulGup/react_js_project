import React, { Component } from "react";
import LifecycleA from "./LifecycleA";
import Memo from "./Memo";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shulbhi",
    };
    console.log("constructor lifecycle");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycle getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log(" shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("lifecycle componentDidUpdate");
  }
  update = () => {
    this.setState({
      name: "shulbhi gupta",
    });
  };

  render() {
    console.log("Lifecycle render");
    return (
      <div>
        {this.state.name}
        <LifecycleA />
        <Memo name={this.state.name} />
        <button onClick={this.update}>updates</button>
      </div>
    );
  }
}
export default Lifecycle;
