import { Routes, Route, Link } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import CounterHistory from "./pages/CounterHistory";
import Todolist from "./pages/todolist/Todolist";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/game">Tic Tac Toe</Link> |{" "}
        <Link to="/counter">Counter History</Link> |{" "}
        <Link to="/todo">Todo List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome! This is the Home page.</h2>} />
        <Route path="/game" element={<TicTacToe />} />
        <Route path="/counter" element={<CounterHistory />} />
        <Route path="/todo" element={<Todolist />} />
      </Routes>
    </div>
  );
}

export default App;
