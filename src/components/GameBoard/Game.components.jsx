import React from "react";
import Button from "../Buttons/Buttons.components";
import Dice from "../Dice/Dice.components";
import Player from "../Player/Player.components";
import "./Game.style.css";
import dice1 from "../../images/dice-1.png";
import dice2 from "../../images/dice-2.png";
import dice3 from "../../images/dice-3.png";
import dice4 from "../../images/dice-4.png";
import dice5 from "../../images/dice-5.png";
import dice6 from "../../images/dice-6.png";

const dice = [dice1, dice2, dice3, dice4, dice5, dice6];
const whoIsActiveBackground = "#F4F9FF";
const whoIsNotActiveBackground = "#E5F2FF";
const activeBorder = "green";
const notActiveBorder = "red";
let highestScore = 100;

let diceNum1, diceNum2;

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }


  state = {
    player1: {
      count: 0,
      total: 0,
      isTurn: true,
      background: whoIsActiveBackground,
      color: activeBorder,
   
    },
    player2: {
      count: 0,
      total: 0,
      isTurn: false,
      background: whoIsNotActiveBackground,
      color: notActiveBorder,
 
    },
    dice: [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)],
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }
  
  handleChange = (event) => {
    if(event.target.value >= 0) {
    highestScore = event.target.value ;
    this.newGame()
    }
    else {
      alert("you can only set the final score more than 0")
      event.target.value = '';
    }
  };


  diceRolling = () => {
    diceNum1 = Math.ceil(Math.random() * 6);
    diceNum2 = Math.ceil(Math.random() * 6);
    document.querySelector(".dice").style.display = "block";
    if (this.state.player1.isTurn === true) {
      this.setState((prevState) => ({
        player1: {
          count: diceNum1 + diceNum2,
          total: (prevState.player1.total += prevState.player1.count),
          isTurn: true,
          background: whoIsActiveBackground,
          color: activeBorder,
        },
      }));
      if (this.state.player1.count === 12) {
        this.setState({
          player1: {
            count: 0,
            total: 0,
            isTurn: false,
            background: whoIsNotActiveBackground,
            color: notActiveBorder,
          },
          player2: {
            count: this.state.player2.count,
            total: this.state.player2.total,
            isTurn: true,
            background: whoIsActiveBackground,
            color: activeBorder,
          },
        });
      }
    }
    if (this.state.player2.isTurn === true) {
      this.setState((prevState) => ({
        player2: {
          count: diceNum1 + diceNum2,
          total: (prevState.player2.total += prevState.player2.count),
          isTurn: true,
          background: whoIsActiveBackground,
          color: notActiveBorder,
        },
      }));
      if (this.state.player2.count === 12) {
        this.setState({
          player2: {
            count: 0,
            total: 0,
            isTurn: false,
            background: whoIsNotActiveBackground,
            color: notActiveBorder,
          },
          player1: {
            count: this.state.player1.count,
            total: this.state.player1.total,
            isTurn: true,
            background: whoIsActiveBackground,
            color: activeBorder,
          },
        });
      }
    }
    this.whoIsWinner(highestScore);
  
  };

  whoHold = () => {
    if (this.state.player1.isTurn === true) {
      this.setState({
        player1: {
          isTurn: false,
          count: 0,
          total: this.state.player1.total + this.state.player1.count,
          background: whoIsNotActiveBackground,
          color: notActiveBorder,
        },
        player2: {
          isTurn: true,
          count: this.state.player2.count,
          total: this.state.player2.total,
          background: whoIsActiveBackground,
          color: activeBorder,
        },
      });
      if (this.state.player1.count === 12) {
        this.setState({
          player1: {
            isTurn: false,
            count: 0,
            total: 0,
          },
        });
      }
    } else if (this.state.player1.isTurn === false) {
      this.setState({
        player1: {
          isTurn: true,
          count: this.state.player1.count,
          total: this.state.player1.total,
          background: whoIsActiveBackground,
          color: activeBorder,
        },
        player2: {
          isTurn: false,
          count: 0,
          total: this.state.player2.total + this.state.player2.count,
          background: whoIsNotActiveBackground,
          color: notActiveBorder,
        },
      });
      if (this.state.player2.count === 12) {
        this.setState({
          player2: {
            isTurn: false,
            count: 0,
            total: 0,
          },
        });
      }
    }
    this.whoIsWinner(highestScore);
  };
  whoIsWinner = (winPoints) => {
    if (this.state.player1.total >= winPoints) {
      this.newGame();
      alert("Player 1 is the winner");
    }
    if (this.state.player2.total >= winPoints) {
      this.newGame();
      alert("Player 2 is the winner");
    }
  };
  newGame = () => {
    this.setState({
      player1: {
        count: 0,
        total: 0,
        isTurn: true,
        background: whoIsActiveBackground,
        color: activeBorder,
      },
      player2: {
        count: 0,
        total: 0,
        isTurn: false,
        background: whoIsNotActiveBackground,
        color: notActiveBorder,
      },
    });
  };

  render() {
    return (
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <Player
          player="1"
          count={this.state.player1.count}
          total={this.state.player1.total}
          background={this.state.player1.background}
          color={this.state.player1.color}
        />
        <div className="Buttons">
          <Button
            buttonText="New Game"
            onClickFunc={this.newGame}
            icon="fas fa-plus"
          />
          <Button
            buttonText="Roll Dice"
            onClickFunc={this.diceRolling}
            icon="fas fa-dice-five"
          />
          <Button
            buttonText="Hold"
            onClickFunc={this.whoHold}
            icon="fas fa-random"
          />
          <label>Enter Final Score</label>
          <input
            ref={this.inputRef}
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
            className="input"
          ></input>
          <Dice src1={dice[diceNum1 - 1]} src2={dice[diceNum2 - 1]}></Dice>
        </div>

        <Player
          player="2"
          count={this.state.player2.count}
          total={this.state.player2.total}
          background={this.state.player2.background}
          color={this.state.player2.color}
        />
      </div>
    );
  }
}
export default GameBoard;
