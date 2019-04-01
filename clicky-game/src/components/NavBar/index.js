import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Clicky Game</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        
        <span className="navbar-text float-right">
          Score: {props.score} | Top Score: {props.topScore} | {props.announcement}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;