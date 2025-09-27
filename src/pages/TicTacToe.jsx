import { useState } from "react";

function Square({ value, onSquareClick }) {
  return <button onClick={onSquareClick}>{value}</button>;
}

function Board({ squares, onSquareClick }) {
  function renderSquare(i, key) {
    return (
      <Square
        key={key}
        value={squares[i]}
        onSquareClick={() => onSquareClick(i)}
      />
    );
  }

  return (
    <div>
      <div>{[0, 1, 2].map(num => renderSquare(num, num))}</div>
      <div>{[3, 4, 5].map(num => renderSquare(num, num))}</div>
      <div>{[6, 7, 8].map(num => renderSquare(num, num))}</div>
    </div>
  );
}

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleClick(i) {
    if (currentSquares[i] || calculateWinner(currentSquares)) return;

    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    handlePlay(nextSquares);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const winner = calculateWinner(currentSquares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>{status}</div>
      <Board squares={currentSquares} onSquareClick={handleClick} />
      
      {/* History moves list */}
      <ol>
        {history.map((_, move) => {
          const description = move === 0 ? "Go to game start" : `Go to move #${move}`;
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
          );
        })}
      </ol>
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
