import React from "react";

const PostData = ({ postList }) => {
  return (
    <div>
      {postList.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: "bold", margin: "10px" }}>
            {item.title.toUpperCase()}
          </h3>
          <p style={{ fontSize: "15px", color: "gray" }}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostData;
