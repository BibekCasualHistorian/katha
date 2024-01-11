import React from "react";

const CreatePostPage = () => {
  return (
    <div className="text-center">
      <label htmlFor="title">Title</label> <br />
      <input
        name="title"
        type="text"
        placeholder="create a post"
        className="border border-black p-2 rounded-sm"
      />
      <br />
      <label htmlFor="body">Body</label> <br />
      <textarea
        name="body"
        id="body"
        cols="30"
        rows="10"
        placeholder="post your story here"
        className="resize-none border border-black p-2"
      ></textarea>{" "}
      <br />
      <button className="border-gray-700 bg-black text-white p-2 min-w-52 rounded-sm text-lg">
        Post
      </button>
    </div>
  );
};

export default CreatePostPage;
