import React, { useEffect, useState } from "react";
import "./Caro.css";
import Board from "./Board";
import { winner } from "../../helper";
import { toast } from "react-toastify";

function Caro(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winnerPlayer = winner(board);
  const handleClick = (index) => {
    const copy = [...board];
    if (winnerPlayer || copy[index]) return;
    copy[index] = xIsNext ? "X" : "O";
    setBoard(copy);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    if (winnerPlayer) {
      toast.success(`Winner is ${winnerPlayer}`);
    }
  }, [winnerPlayer]);

  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div className="caro">
    <h1>TicTacToe</h1>
      <Board cells={board} onClick={handleClick} />
      <button onClick={handleNewGame}>New game</button>
    </div>
  );
}

export default Caro;
