import React, { Component } from "react";
const _ = require("lodash");

import "../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 onClick={this.props.changeView}>Title</h1>
      </div>
    );
  }
}
