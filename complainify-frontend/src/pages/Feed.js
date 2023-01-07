import React from "react";
import FeedComponent from "./../components/FeedComponent";
import CreatePost from "./../components/CreatePost.js";

const Feed = () => {
  return (
    <div className="flex flex-col justify-evenly items-center gap-1 mt-16">
      <CreatePost />
      <FeedComponent
        name={"User1"}
        date={"Some date1"}
        postTime={3}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User2"}
        date={"Some date2"}
        postTime={3}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User3"}
        date={"Some date2"}
        postTime={3}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User4"}
        date={"Some date2"}
        postTime={3}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User5"}
        date={"Some date2"}
        postTime={3}
        like={10}
        comments={15}
      />
    </div>
  );
};

export default Feed;
