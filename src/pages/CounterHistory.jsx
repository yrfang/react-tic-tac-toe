import { useState } from "react";

export default function CounterHistory() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [currentMove, setCurrentMove] = useState(0);

  function handleIncrement() {
    const nextCount = count + 1;            // compute next value
    setCount(nextCount);                    // update count
    setHistory(h => [...h, nextCount]);     // update history
    setCurrentMove(m => m + 1);             // update move
  }

  function handleDecrement() {
    const nextCount = count - 1;
    setCount(nextCount);
    setHistory(h => [...h, nextCount]);
    setCurrentMove(m => m + 1);
  }

  function resetCount() {
    setCount(0);
    setCurrentMove(0);
    setHistory([]); // clear history
  }

  const moveState = currentMove === 0 ? "Initial state" : `Move #${currentMove}`;

  return (
    <>
      <div>Current count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>

      <div>{moveState}</div>
      <ul>
        History
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
