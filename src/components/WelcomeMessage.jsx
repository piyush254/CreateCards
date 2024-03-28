import React from "react";
import "../App.css";

function WelcomeMessage({ onclickedMessage }) {
  return (
    <center className="welcome">
      <h1>Click on Create Post button and create your beautiful post</h1>
      <button
        onClick={() => onclickedMessage()}
        type="button"
        className="btn btn-primary btn-lg"
      >
        Get post from server
      </button>
    </center>
  );
}

export default WelcomeMessage;
