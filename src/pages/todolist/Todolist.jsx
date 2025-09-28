import { useState } from "react";
import TodoInput from "./TodoInput";
import styles from "./Todolist.module.css";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo, onChangeTodo }) {
  const { text, isDone } = todo;
  return (
    <>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {todo.isEdit ? (
          <input
            type="text"
            value={text}
            onChange={(e) => onChangeTodo(e, todo.id)}
          />
        ) : (
          text
        )}
        <button onClick={toggleTodo}>Done</button>
        <button onClick={deleteTodo}>Delete</button>
        <button onClick={editTodo}>{todo.isEdit ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleAddTodo() {
    if (!text || text.trim().length === 0) return;
    const newTodo = {
      id: Date.now(),
      text: text,
      isDone: false,
      isEdit: false
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setText("");
    console.log(newTodos);
  }

  function toggleTodo(id) {
    // map always returns a new array
    const updatedTodos = todos.map(todo => (
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  function editTodo(id) {
    const updatedTodos = todos.map(todo => (
      todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
    ));
    setTodos(updatedTodos); 
  }

  function onChangeTodo(e, id) {
    const updatedTodos = todos.map(todo => (
      todo.id === id ? { ...todo, text: e.target.value } : todo
    ));
    setTodos(updatedTodos); 
  }

  function onSubmitTodo(e) {
    e.preventDefault();
    handleAddTodo();
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitTodo}>
        <div>
          <TodoInput value={text} handleTextChange={handleTextChange} />
          <button type="submit">Add Todo</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              toggleTodo={() => toggleTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              editTodo={() => editTodo(todo.id)}
              onChangeTodo={(e) => onChangeTodo(e, todo.id)}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}