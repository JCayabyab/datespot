import React, { Component } from "react";
import Home from "./components/Home";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#ff3535"}}>
        <Home />
      </div>
    );
  }
}

export default App;
