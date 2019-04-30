import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components

import Header from "./Components/Header";

class App extends Component {
  render = () => (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
