import axios from "axios";
import React, { Component } from "react";

class Getrequest extends Component {
  constructor(props) {
    super(props);
    this.state = { post: [], errormsg: "" };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        console.log(result);
        this.setState({ post: result.data });
      })
      .catch((error) => this.setState({ errormsg: "error in api" }));
  }

  render() {
    const { post, errormsg } = this.state;
    return (
      <div>
        {post.length
          ? post.map((display, index) => (
              <div data-testid={`getitem-${index}`} key={display.id}>
                {display.title}
              </div>
            ))
          : null}
        {errormsg ? { errormsg } : null}
      </div>
    );
  }
}
export default Getrequest;
