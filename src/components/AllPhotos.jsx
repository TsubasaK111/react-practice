import React, { Component } from "react";

export const AllPhotos = (props) => {
  console.log(props);
  return (
    <div className="imageBox">
      {props.photos.map((photo, i) => (
        <div className="imageCell" key={photo.Key + i}>
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
