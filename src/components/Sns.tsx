import React from "react";
import Eight from "./Eight";
import Github from "./Github";
import Twitter from "./Twitter";

export default class Sns extends React.Component {
  render() {
    return (
      <div>
        <h1>SNS</h1>
        <Twitter />
        <Eight />
        <Github />
      </div>
    );
  }
}
