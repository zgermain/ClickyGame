import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";





class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score:0,
    topScore:0
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <div>
        <NavBar />
        <Header />
        <div className="container">
          <div className="row">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
