import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
