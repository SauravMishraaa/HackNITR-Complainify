import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const CreatePost = () => {
  return (
    <>
      <>
        <Link
          to={'/create'}
          className='bg-white w-1/5 shadow-lg rounded-lg cursor-pointer'>
          <p>Create Post</p>
        </Link>
      </>
      <Outlet />
    </>
  );
};

export default CreatePost;
