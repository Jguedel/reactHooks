import React, { useState } from "react";
import axios from "axios";
const GetJokes = async ({ toGet = 5 }) => {
  try {
    // load jokes one at a time, adding not-yet-seen jokes
    let listJokes = [];
    let seenJokes = new Set();
    console.log("hit");

    while (listJokes.length < toGet) {
      let res = await axios.get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
      });
      let joke = { id: res.data.id, joke: res.data.joke };
      if (!seenJokes.has(joke.id)) {
        seenJokes.add(joke.id);
        listJokes.push({ joke, votes: 0 });
      } else {
        console.log("duplicate found!");
      }
    }
    return { listJokes, checkLoad: false };
  } catch (err) {
    console.error(err);
  }
};

export default GetJokes;
