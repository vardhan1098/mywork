import React from "react";
import FilterPosts from "./FilterPosts";
import PostList from "./PostList";
import LatestPosts from "./LatestPosts";

const Dashboard = () => {
  return (
    <>
      <h1>Blog Posts</h1>
      <div style={{ display: "flex" ,height:"90vh",gap:"10px"}}>
        <div style={{flex:"0.2",border:"1px solid black"}}>
          <FilterPosts />
        </div>
        <div style={{flex:"0.6",border:"1px solid black"}}>
          <PostList />
        </div>
        <div style={{flex:"0.2",border:"1px solid black"}}>
            <LatestPosts/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
