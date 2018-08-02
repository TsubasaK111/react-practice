import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { SinglePhoto } from "./SinglePhoto";
import { saveObject, listObjects, getSingleObject } from "../utils";

import "../styles/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: ["photo"],
      selectedPhoto: 0,
    };
  }

  componentDidMount() {
    this.getAllPhotos();
  }

  setAllPhotos = () => {
    this.setState({
      currentView: "AllPhotos",
    });
  };

  getAllPhotos = () => {
    listObjects().then((data) => {
      const s3domain = "http://react.sprint.s3.amazonaws.com/";
      console.log(data);
      const photos = data.map((photo) => {
        const url = s3domain + photo.Key;
        return { ...photo, url };
      });

      this.setState({ photos });
    });
  };

  setCurrentView = () => {
    this.setState({
      currentView: "AllPhotos",
    });
  };

  uploadFile = (file) => {
    saveObject(file);
  };

  getPhotoIndex = (photo) => {
    const index = photo.target.getAttribute("index");
    this.setState({
      selectedPhoto: index,
      currentView: "SinglePhoto",
    });
  };

  render() {
    return (
      <div className="app">
        <Navbar changeView={this.setCurrentView} uploadFile={this.uploadFile} />
        <div>{JSON.stringify(this.state.currentView)}</div>
        {this.state.currentView === "AllPhotos" ? (
          <AllPhotos
            photos={this.state.photos}
            getPhotoIndex={this.getPhotoIndex}
          />
        ) : (
          <SinglePhoto photo={this.state.photos[this.state.selectedPhoto]} />
        )}
      </div>
    );
  }
}
