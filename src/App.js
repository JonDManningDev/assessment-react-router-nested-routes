import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";
import UserPosts from "./UserPosts";
import UserPost from "./UserPost";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:userId" element={<User />}>
          <Route index element={<UserProfile />} />
          <Route path="posts" element={<UserPosts />}>
            <Route path=":postId" element={<UserPost />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
