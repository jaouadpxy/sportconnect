import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
// import "tachyons";

// Components

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import TrainingBar from "./Components/TraningBar";
import Sports from "./Components/Sports";
import OtherSports from "./Components/OtherSports";
import Affilates from "./Components/Affilates";

import Footer from "./Components/Footer";

class App extends Component {
  render = () => (
    <div className="container-wrapper">
      <Navigation />
      <Header />
      <TrainingBar />
      <Sports />
      <OtherSports />
      <Affilates />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
