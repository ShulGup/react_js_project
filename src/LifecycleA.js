import React, { Component } from "react";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shulbhi",
    };
    console.log("constructorA lifecycle");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMountA");
  }
  shouldComponentUpdate() {
    console.log(" shouldComponentUpdateA");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle getSnapshotBeforeUpdateA");
    return null;
  }
  componentDidUpdate() {
    console.log("lifecycle componentDidUpdateA");
  }

  render() {
    console.log("Lifecycle renderA");
    return <div>lifecycle A</div>;
  }
}
export default LifecycleA;
