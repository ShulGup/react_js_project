import React, { Component } from "react";
import axios from "axios";

class Postrequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
    };
  }
  changethedata = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitthedata = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { name, age } = this.state;
    return (
      <div>
        <form onSubmit={this.submitthedata} data-testid="submit_test">
          <input
            type="text"
            name="name"
            value={name}
            title="name"
            onChange={this.changethedata}
          />
          <input
            type="text"
            name="age"
            title="age"
            value={age}
            onChange={this.changethedata}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Postrequest;
