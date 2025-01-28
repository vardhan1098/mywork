import React from "react";
import TaskFilter from "./TaskFilter";

const TaskList = ({
  title,
  id,
  completed,
  todo,
  handleEdit,
  handleToogleComplete,
}) => {
  console.log(completed);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "10px", flex: "0.3" }}>
        <TaskFilter todo={todo} />
      </div>

      <div
        key={id}
        style={{
          background: "#fff",
          display: "flex",
          flex: "0.7",
          justifyContent: "center",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          alignItems: "center",
          gap: "20px",
          margin: "10px",
          border: "1px solid black",
          width: "50%",
          borderRadius: "10px",
        }}
      >
        <h2>{title}</h2>
        <select
          value={completed ? "completed" : "Incomplete"}
          onChange={() => handleToogleComplete(id)}
          style={{ padding: "5px", borderRadius: "5px", cursor: "pointer" }}
        >
          <option value="Incomplete">InComplete</option>
          <option value="completed">Completed</option>
        </select>
        <button
          style={{
            padding: "10px 16px",
            cursor: "pointer",
            border: "0.4px solid gray",
            borderRadius: "10px",
          }}
          onClick={() => handleEdit(id)}
        >
          🖊️
        </button>
        <button
          style={{
            padding: "10px 16px",
            cursor: "pointer",
            border: "0.4px solid gray",
            borderRadius: "10px",
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TaskList;
