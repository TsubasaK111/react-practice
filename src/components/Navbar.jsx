import React, { Component } from "react";
const _ = require("lodash");
import "../styles/navbar.css";
import Upload from "./Upload";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
        <h1 onClick={this.props.changeView}>Title</h1>
        <Upload uploadFile={this.props.uploadFile} />
      </div>
    );
  }
}
