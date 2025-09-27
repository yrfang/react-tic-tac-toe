import { Routes, Route, Link } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/game">Tic Tac Toe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome! This is the Home page.</h2>} />
        <Route path="/game" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;
