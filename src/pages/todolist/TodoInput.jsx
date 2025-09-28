export default function TodoInput({ value, handleTextChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={handleTextChange}
      placeholder="Enter a todo"
    />
  );
}