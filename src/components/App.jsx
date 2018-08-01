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
      console.log(data);
      this.setState({
        photos: [...data],
      });
    });
  };

  render() {
    // if (this.state.currentView === "AllPhotos") {
    //   return <div> {listObjects}</div>;
    // }
    return (
      <div className="app">
        <Navbar currentView={this.state.currentView} />
        {this.state.currentView === "AllPhotos" ? <AllPhotos /> : <SinglePhoto /> }
        <button onClick={this.getAllPhotos}>BUTTON</button>
        <div>{JSON.stringify(this.state.currentView)}</div> sup bros!
        <AllPhotos />
      </div>
    );
  }
}
