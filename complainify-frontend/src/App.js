import React from 'react';
import Feed from './pages/Feed.js';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div className='bg-gray-400 h-full w-full'>
              <br />
              <Feed />
            </div>
          }></Route>

        <Route
          path='create'
          element={<PostForm />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
