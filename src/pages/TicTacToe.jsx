import { useState } from "react";

function Square({ value, onSquareClick }) {
  return <button onClick={onSquareClick}>{value}</button>;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function renderSquare(i, key) {
    return <Square key={key} value={squares[i]} onSquareClick={() => handleClick(i)} />;
  }

  return (
    <div>
      <div>{status}</div>
      <div>{[0,1,2].map(num => renderSquare(num, num))}</div>
      <div>{[3,4,5].map(num => renderSquare(num, num))}</div>
      <div>{[6,7,8].map(num => renderSquare(num, num))}</div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}
