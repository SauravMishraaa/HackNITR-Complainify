import React from "react";

const FeedComponent = ({ name, description, like, comments }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg items-center justify-start w-2/6">
      <div className="flex items-start justify-center px-4 py-2">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
        <div className="">
          <div className="flex items-center flex-col">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <br />
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <div className="flex mr-2 text-gray-700 text-sm mr-10 items-center justify-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-1"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{like}</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-8 items-center justify-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-1"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>{comments}</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-4 items-center justify-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-1"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedComponent;
