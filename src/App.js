import React, { Component } from "react";
import JokeList from "./JokeList";
import JokeListHooks from "./JokeListHook";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeListHooks toGet={5} />
        {/* <JokeList /> */}
      </div>
    );
  }
}

export default App;
