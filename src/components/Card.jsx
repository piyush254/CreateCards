import React, { useContext } from "react";
import "../App.css";
import { PostList } from "../store/Post-list";
import { MdDeleteForever } from "react-icons/md";

function Card({ card }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="custom-card">
      <div className="custom-card-body">
        <h5 className="custom-card-title">{card.title}</h5>
        <p className="custom-card-text">{card.body}</p>

        <div className="custom-card-tags">
          {card.tags.map((tag) => (
            <span key={tag} className="custom-badge">{tag}</span>
          ))}
        </div>

        <span
          onClick={() => deletePost(card.id)}
          className="custom-delete-icon"
        >
          <MdDeleteForever />
        </span>

        <div className="custom-reaction">
          This post has been liked by {card.reactions.likes} people
        </div>
      </div>
    </div>
  );
}

export default Card;
