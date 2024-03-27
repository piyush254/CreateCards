import React, { useContext } from "react";
import "../App.css";
import { PostList } from "../store/Post-list";
import { MdDeleteForever } from "react-icons/md";
function Card({card}) {
  const {deletePost} = useContext(PostList)
  return (
    <div className="card post-card" style={{ width: "29rem", height: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.body}</p>

        {card.tags.map((tag) => (
         <span  key={tag} className="badge text-bg-primary hastag">{tag}</span>
        ))}
        <span onClick={() => deletePost(card.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDeleteForever />
        </span>
        <div className="alert alert-dark reaction" role="alert">
          This post has been reacted by {card.numberOflikes} people
        </div>
      </div>
    </div>
  );

}

export default Card;
