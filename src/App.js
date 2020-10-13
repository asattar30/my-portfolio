import React, { Component } from "react";
import MainComponent from "./components/MainComponent";
import "./App.css";

export default class App extends Component {
  /*
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextState);
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  */

  render() {
    return (
      <div>
        <MainComponent />
      </div>
    );
  }
}
