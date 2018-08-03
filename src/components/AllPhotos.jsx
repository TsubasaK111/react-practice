import React, { Component } from "react";

export const AllPhotos = (props) => {
  return (
    <div className="imageBox" key="Sucks">
      {props.photos.map((photo, i) => (
        <div className="imageCell" key={photo.Key}>
          <img
            className="image"
            onClick={props.getPhotoIndex}
            src={photo.url}
            index={i}
          />
        </div>
      ))}
    </div>
  );
};
