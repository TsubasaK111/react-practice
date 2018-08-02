import React from "react";

export const SinglePhoto = (props) => {
  return (
    <div>
      <img className="single-photo" src={props.photo.url}/>
    </div>
  );
};
