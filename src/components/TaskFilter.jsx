import React, { useState } from "react";

const TaskFilter = ({ handleFilterItems }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterchange = (e) => {
    const selectFilter = e.target.value;
    setFilter(selectFilter);
    if (handleFilterItems) {
      handleFilterItems(selectFilter);
    }
  };
  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <h2>Filter Todo Items</h2>
      <select name="todoItems" value={filter} onChange={handleFilterchange}>
        <option value="All">All</option>
        <option value="active">Active</option>
        <option value="complete">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilter;
