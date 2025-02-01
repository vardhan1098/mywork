import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, DeleteTodo, EditTodo, TOGGLE_TODO } from "../Redux/Action";

const Todo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [editedId, setEditedId] = useState(null);
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    dispatch({
      type: AddTodo,
      payload: { title: inputValue },
    });
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: DeleteTodo,
      payload: { id },
    });
  };

  const handleEditTodo = (id, title) => {
    setEditedId(id);
    setInputValue(title);
  };

  const handleUpdateTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please Add Todo..");
    }
    dispatch({
      type: EditTodo,
      payload: { id: editedId, title: inputValue },
    });
    setInputValue("");
    setEditedId(null);
  };

  const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {editedId ? (
        <button onClick={handleUpdateTodo}>Update Todo</button>
      ) : (
        <button onClick={handleAddTodo}>Add Todo</button>
      )}
      <div>
        {todos.map((todo) => (
          <div
            style={{
              display: "flex",
              border: "1px solid black",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <h2
              key={todo.id}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.title}
            </h2>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleEditTodo(todo.id, todo.title)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
