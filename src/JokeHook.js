import React, { Component } from "react";
import "./Styles/Joke.css";

const Joke = ({ id, vote, votes, text }) => {
  function upVote(evt) {
    vote(id, +1);
  }
  function downVote(evt) {
    vote(id, -1);
  }
  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote(evt)}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={downVote(evt)}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
};

export default Joke;
