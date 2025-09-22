import React from "react";
import { useState } from "react";
import axios from "axios";

function UserReg() {
  const [post, setPost] = useState(null);
  const [inputValue, setInputValue] = useState({});
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const handlChange = (e) => {
    if (e.target.name === "title") {
        setTitle(e.target.value)
    } else if (e.target.name === "blog") {
        setBlog(e.target.value)
    }
  };

  console.log(title, blog);

  const createPost = async () => {
    const postData = {
      title: title,
      body: blog,
      userId: 1,
    };
    try {
      const response = await axios.post(baseUrl, postData);
      setPost(response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  console.log(post);

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Blog Posts</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 p-4 m-4 w-1/2 mx-auto border rounded-3xl bg-blue-300"
      >
        <input
          type="text"
          placeholder="Blog Title"
          name="title"
          onChange={handlChange}
          value={title}
          className="p-3 bg-white text-black"
        />
        <textarea
          type="text"
          placeholder="Blog Post"
          name="blog"
          onChange={handlChange}
          value={blog}
          className="p-3 bg-white text-black"
        />
        <button onClick={createPost} className="p-3">
          Submit
        </button>
      </form>

      <div className="p-4 m-4 border-b">
        <div className="flex gap-3">
          <strong>Blog-Title:</strong> <p>Okoro Christopher</p>
        </div>
        <div className="flex gap-3">
          <strong>Blog-Post:</strong> <p>Chris@gmail.com</p>
        </div>
      </div>

      <button
        onClick={createPost}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 m-4"
      >
        Create Post
      </button>

      {post && <pre>Post Created: {JSON.stringify(post, null, 2)}</pre>}
    </div>
  );
}

export default UserReg;
