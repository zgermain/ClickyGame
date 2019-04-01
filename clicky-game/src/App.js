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
  return picArray;
}


class App extends Component {
  
  state = {
    score:0,
    topScore:0,
    Pics,
    clickedImages: [],
    gameOver: false,
    
    announcement: ""
  };

  clickAction = (id) => {
    console.log(`Clicked ID: ${id}`);
    if (!this.state.clickedImages.includes(id)){
      this.increaseScore();
      this.state.clickedImages.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.newGame();
    }
  }

  increaseScore = () => {
    let score = this.state.score++;
    console.log(`Current Score: ${score}`);
    if (score === this.state.Pics.length) {
      this.setState({
        announcement: "WINNER WINNER CHICKEN DINNER!",
        topScore: score,
        score: 0,
        clickedImages: [],
        Pics,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        score: score,
        announcement: "HIGH SCORE"
      })
    } else {
      this.setState ({
        score: score,
        announcement: "YOU GOT IT!"
      });
    }
    this.resetPics();
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
