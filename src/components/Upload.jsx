import React, { Component } from "react";
import _ from "lodash";

import "../styles/upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.focusFileInput = this.focusFileInput.bind(this);
    // this.getFile = this.getFile.bind(this);
  }

  focusFileInput() {
    this.fileInput.current.click();
  }

  render() {
    return (
      <div className="file-upload">
        <input
          type="file"
          id="fileInput"
          onChange={this.props.getPhotos}
          ref={this.fileInput}
        />
        <button className="button" onClick={this.focusFileInput}>upload</button>
      </div>
    );
  }
}
