import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";
import Pics from "./pics.json";



const randomPic = (picArray) => {
  
}


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score:0,
    topScore:0
  };

  clickAction = (id) => {

  }

  pointAction = () => {

  }

  newGame = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore
    })
  }

  resetPics = () => {

  }

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
          {/* <image src="..\assets\images\Calvin.jpg" alt="calvin"></image> */}
        </div>
      </div>
    );
  }
}

export default App;
