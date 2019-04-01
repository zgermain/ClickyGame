import React from "react";

function Thumbnail (props) {
  return (
    <div className="col-md-3" id={props.id} value={props.id} onClick={() => props.clickAction(props.id)}>
    <img src={props.image} alt="bw-comic" className="img-thumbnail" ></img>
    </div>
  )
};

export default Thumbnail;