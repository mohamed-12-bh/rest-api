import React, { Component } from "react";
import "./App.css";
import ListContact from "./components/ListContact";

class App extends Component {
  state = {
    name: "",
    mail: "",
    phone: ""
  };

  render() {
    return (
      <div>
        <div className="app">
          <h1 className="list">List contact</h1>
          <ListContact />
        </div>
      </div>
    );
  }
}
export default App;
