import React, { useState, useEffect } from "react";
import Joke from "./Joke";
//HOOKS
import GetJokes from "./Hooks/GetJokes";
//STYLES
import "./Styles/JokeList.css";

const JokeListHooks = ({ toGet = 5 }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const allJokes = async () => {
      let { listJokes, checkLoad } = await GetJokes(toGet);
      console.log(listJokes);
      // console.log(checkLoad);
      setJokes((jokes) => {
        return listJokes;
      });
      setIsLoading((isLoading) => {
        return checkLoad;
      });
    };

    if (jokes.length === 0) allJokes();
  }, [jokes]);

  const newJoke = async () => {
    setIsLoading((isLoading) => {
      return true;
    });
    setJokes((jokes) => {
      return [];
    });
  };

  const vote = (id, num) => {
    setJokes((jokes) =>
      jokes.map((j) => (j.joke.id === id ? { ...j, votes: j.votes + num } : j))
    );
  };

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  } else {
    return (
      <div className="JokeList">
        <button className="JokeList-getmore" onClick={newJoke}>
          Get New Jokes
        </button>

        {jokes.map((j) => (
          <Joke
            text={j.joke.joke}
            key={j.joke.id}
            id={j.joke.id}
            votes={j.votes}
            vote={vote}
          />
        ))}
      </div>
    );
  }
};
export default JokeListHooks;
