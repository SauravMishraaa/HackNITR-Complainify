import React from "react";
import Feed from "./pages/Feed.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <Navbar />
      <br />
      <Feed />
    </div>
  );
}

export default App;
