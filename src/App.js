import React, { useReducer, useState } from "react";
import "./styles.css";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      };

    case "delete-todo":
      return {
        todos: state.todos.filter((todo, id) => id !== action.id)
      };
    default:
      return state;
  }
}

export default function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState("");

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo, id) => (
        <div key={id} onClick={() => dispatch({ type: "delete-todo", id })}>
          {todo.text}
        </div>
      ))}
    </div>
  );
}
