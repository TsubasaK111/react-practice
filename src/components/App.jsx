import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { saveObject, listObjects, getSingleObject } from "../utils";

import "../styles/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: ["photo"],
      selectedPhoto: "selectedPhoto",
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
    console.log(this.state);
  };

  uploadFile = (file) => {
    saveObject(file);
  };

  getPhotoIndex = (photo) => {
    const index = photo.target.getAttribute("index");
    this.setState({ selectedPhoto: index });
  };

  render() {
    return (
      <div className="app">
        <Navbar changeView={this.setCurrentView} uploadFile={this.uploadFile} />
        {/* {this.state.currentView === "AllPhotos" ? <AllPhotos /> : <SinglePhoto /> } */}
        <div>{JSON.stringify(this.state.currentView)}</div> sup bros!
        <AllPhotos
          photos={this.state.photos}
          getPhotoIndex={this.getPhotoIndex}
        />
      </div>
    );
  }
}
