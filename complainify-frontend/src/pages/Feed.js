import React from "react";
import FeedComponent from "./../components/FeedComponent";
import CreatePost from "./../components/CreatePost.js";

const Feed = () => {
  return (
    <div className="flex flex-col justify-evenly items-center gap-1 mt-16">
      <CreatePost />
      <FeedComponent
        name={"User1"}
        description={"Some Description1"}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User2"}
        description={"Some Description2"}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User3"}
        description={"Some Description2"}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User4"}
        description={"Some Description2"}
        like={10}
        comments={15}
      />
      <FeedComponent
        name={"User5"}
        description={"Some Description2"}
        like={10}
        comments={15}
      />
    </div>
  );
};

export default Feed;
