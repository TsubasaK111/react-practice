import React, { Component } from "react";
import _ from "lodash";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="imageBox" key="Sucks">
        {this.props.photos.map((photo,i) => (
          <div className="imageCell" key={photo.Key}>
            <img
              className="image"
              onClick={this.props.getPhotoIndex}
              src={photo.url}
              index={i}
            />
          </div>
        ))}
      </div>
    );
  }
}
