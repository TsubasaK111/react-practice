import React, { Component } from "react";
import "../styles/navbar.css";
import Upload from "./Upload";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1 className="navbar-header navText" onClick={props.goHome}>
        Title
      </h1>
      <Upload getPhotos={props.getPhotos} />
    </div>
  );
};
