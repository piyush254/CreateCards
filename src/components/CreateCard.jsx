import React, { useContext, useReducer, useRef } from "react";
import "./CreateCard.css"
import { PostList } from "../store/Post-list";

function CreateCard({setItem}) {
  const { addPost } = useContext(PostList);

  const useridElement = useRef();
  const titleElement = useRef();
  const likesElement = useRef();
  const TagsElement = useRef();
  const bodyElement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const title = titleElement.current.value;
    const likes = likesElement.current.value;
    const body = bodyElement.current.value;
    const tags = TagsElement.current.value.split(" ");

    useridElement.current.value = "";
    titleElement.current.value = "";
    likesElement.current.value = "";
    TagsElement.current.value = "";
    bodyElement.current.value = "";
    if(confirm("Do you want to go on home page")){
      setItem("Home")
    }
    addPost(userid, title, likes , body, tags);
  };

  return (
    <form className="CreateCard" onSubmit={handlesubmit}>
      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          ref={useridElement}
          className="form-control"
          id="userid"
          placeholder="Enter your  user-Id"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How is your day going..."
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="likes" className="form-label">
          No. of likes
        </label>
        <input
          type="text"
          ref={likesElement}
          className="form-control"
          id="like"
          placeholder="Likes you want on your post"
        />
      </div>{" "}
      <div className="mb-3 ">
        <label htmlFor="Tags" className="form-label">
          Your post #Tags
        </label>
        <input
          type="text"
          ref={TagsElement}
          className="form-control"
          id="Tags"
          placeholder=" Add # tags for more reach"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={bodyElement}
          className="form-control h-100"
          id="body"
          placeholder="Tell me something about your post"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreateCard;
