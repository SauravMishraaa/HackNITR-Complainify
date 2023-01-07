import React from "react";

const FeedComponent = ({ name, date, postTime, like, comments }) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center rounded-2xl">
      <div className="bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <div className="ml-2">
            <div className="text-sm ">
              <span className="font-semibold">{name}</span>
            </div>
            <div className="text-gray-500 text-xs font-bold ">Since {date}</div>
            <div className="text-gray-500 text-xs flex">
              <p className="inline-block font-medium">
                <span className="text-md text-xs ">{postTime}</span> days
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="h-60 w-full rounded-md"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div className="text-gray-500 text-xs flex items-center mt-3">
          <img
            className="mr-0.5"
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
          />
          <img
            className="mr-0.5"
            src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
          />
          <img
            className="mr-0.5"
            src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
          />
          <span className="ml-1">47 • 26 comments</span>
        </div>
      </div>
    </div>
  );
};

export default FeedComponent;
