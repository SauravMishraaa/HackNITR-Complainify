import React from "react";
import Feed from "./pages/Feed.js";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm.js";

function App() {
  return (
    <div className="bg-gray-400 h-full w-full">
      <Navbar />
      <br />
      <Feed />
      <PostForm />
    </div>
  );
}

export default App;
