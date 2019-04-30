import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import "tachyons";

// Components

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Session from "./Components/TraningBar";
import Sports from "./Components/Sports";
import OtherSports from "./Components/OtherSports";
import Affiliates from "./Components/Affilates";
import Footer from "./Components/Footer";

class App extends Component {
  render = () => (
    <div className="container-wrapper">
      <Navigation />
      <Header />
      <Session />
      <Sports />
      <OtherSports />
      <Affiliates />
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
