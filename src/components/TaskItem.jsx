import React, { useState } from "react";
import TaskList from "./TaskList";

const TaskItem = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTodo = () => {
    if (task.trim() === "") {
      alert("Please Add Todo..");
    } else {
      let newTodo = {
        id: new Date().getTime().toString(),
        title: task,
        completed: false,
        active: true,
      };
      setTodo((prevTodo) => [...prevTodo, newTodo]);
      setfilteredItems((prev) => [...prev, newTodo]);
      setTask("");
    }
  };

  const handleEdit = (selectItem) => {
    const todoItem = todo.find((item) => item.id === selectItem);
    setEditId(selectItem);
    setTask(todoItem.title);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updateTodo = todo.map((item) =>
      item.id === editId ? { ...item, title: task } : item
    );
    setTodo(updateTodo);
    setIsEditing(false);
    setTask("");
    setEditId(null);
  };

  const handleFilterItems = (filter) => {
    if (filter === "All") {
      setfilteredItems(todo);
    } else if (filter === "active") {
      setfilteredItems(todo.filter((item) => !item.completed));
    } else if (filter === "complete") {
      setfilteredItems(todo.filter((item) => item.completed));
    }
  };

  const handleToogleComplete = (id) => {
    const updateComplete = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(updateComplete);
    setfilteredItems(updateComplete);
  };

  return (
    <div>
      <h2>Todo-App</h2>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a Todo.."
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "0.5px solid gray",
          }}
        />
        {isEditing ? (
          <button
            style={{
              background: "green",
              color: "white",
              padding: "8px",
              cursor: "pointer",
              borderRadius: "10px",
              marginLeft: "10px",
              border: "none",
            }}
            onClick={handleUpdate}
          >
            UpdateTodo
          </button>
        ) : (
          <button
            style={{
              background: "blue",
              color: "white",
              padding: "8px",
              cursor: "pointer",
              borderRadius: "10px",
              marginLeft: "10px",
              border: "none",
            }}
            onClick={handleAddTodo}
          >
            AddTodo
          </button>
        )}
      </div>
      <div>
        {filteredItems.map((todoItem) => (
          <div key={todoItem.id}>
            <TaskList
              title={todoItem.title}
              id={todoItem.id}
              todo={todo}
              completed={todoItem.completed}
              handleEdit={handleEdit}
              handleFilterItems={handleFilterItems}
              handleUpdate={handleUpdate}
              handleToogleComplete={handleToogleComplete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskItem;
