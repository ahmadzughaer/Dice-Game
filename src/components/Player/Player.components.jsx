import React from "react";
import "./Player.style.css";

const Player = (props) => {
  return (
    <div className="container" style={{ background: props.background }}>
      <div >
        <h1>Player {props.player}</h1>
      </div>
      <div className="scores" style={{border: `${props.color} solid 2px`}}>
        <div>
          <h1>{props.count}</h1>
        </div>
        <div >
          <p>Total:</p>
          <h3>{props.total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Player;
