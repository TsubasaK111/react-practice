import React, { Component } from "react";
const _ = require("lodash");

import "../styles/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: props.currentView,
    };
  }

  setCurrentView = () => {
    this.setState({
      currentView: "sAllPhotos",
    });
  }

  render() {
    return (
      <div className="navbar">
        <h1 onClick={this.setCurrentView}>Title</h1>
      </div>
    );
  }
}
