import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";
import Pics from "./pics.json";



const randomPic = (picArray) => {
  let guesses = picArray.length;

  while (guesses > 0) {
    let index = Math.floor(Math.random() * guesses);
    guesses--;
    let temp = picArray[guesses];
    picArray[guesses] = picArray[index];
    picArray[index] = temp;
  }
}


class App extends Component {
  
  state = {
    score:0,
    topScore:0,
    Pics,
    clickedImages: []
    
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
