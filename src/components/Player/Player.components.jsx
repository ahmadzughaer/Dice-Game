import React from "react";
import "./Player.style.css";

const Player = (props) => {
  return (
    <div className="container" style={{ background: props.background }}>
      <div className="player">
        <h1>Player {props.player}</h1>
      </div>
      <div className="scores" style={{border: `${props.color} solid 2px`}}>
        <div className="count">
          <h1>{props.count}</h1>
        </div>
        <div className="total">
          <p>Total:</p>
          <h4>{props.total}</h4>
        </div>
      </div>
    </div>
  );
};

export default Player;
