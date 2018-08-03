import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar";
import { AllPhotos } from "./AllPhotos";
import { SinglePhoto } from "./SinglePhoto";
import { saveObject, listObjects, getSingleObject } from "../utils";

import "../styles/styles.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentView: "AllPhotos",
    //   photos: ["photo"],
    //   selectedPhoto: undefined,
    // };
  }

  componentDidMount() {
    // listObjects().then((data) => {
    //   const s3domain = "http://react.sprint.s3.amazonaws.com/";
    //   const photos = data.map((photo) => {
    //     const url = s3domain + photo.Key;
    //     return { ...photo, url };
    //   });
    //   this.setState({ photos });
    // });
  }

  getAllPhotos = () => {
    listObjects().then((data) => {
      const s3domain = "http://react.sprint.s3.amazonaws.com/";
      const photos = data.map((photo) => {
        const url = s3domain + photo.Key;
        return { ...photo, url };
      });

      this.setState({ photos });
    });
  };

  getPhotos = (event) => {
    const file = event.target.files[0];
    saveObject(file);
  };

  getPhotoIndex = (photo) => {
    const index = photo.target.getAttribute("index");
    this.setState({
      selectedPhoto: index,
      currentView: "SinglePhoto",
    });
  };

  // goHome = () => {
  //   this.setState({
  //     currentView: "AllPhotos",
  //   });
  // };

  render() {
    return (
      <div className="app">
        <Navbar getPhotos={this.getPhotos} goHome={this.props.goHome} />
        <div>{JSON.stringify(this.props.currentView)}</div>
        {this.props.currentView === "AllPhotos" ? (
          <AllPhotos
            photos={this.props.photos}
            getPhotoIndex={this.getPhotoIndex}
          />
        ) : (
          <SinglePhoto photo={this.props.photos[this.props.selectedPhoto]} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { photos: state.photos, currentView: state.currentView };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goHome: () => dispatch({ type: "GO_HOME" }),
    getAllPhotos: () => dispatch({ type: "GET_ALL_PHOTOS"})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
