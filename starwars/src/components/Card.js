import React, { useState, useEffect } from "react";
import axios from "axios";

import Cardinfo from "./Cardinfo.js";

export default function Card() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then((res) => {
        console.log(`Success! You got the data`, res);
        setCharacter(res.data.results);
      })
      .catch((err) => {
        console.log(`Error :( , try again`, err);
      });
  }, []);
  return (
    <div className="card-container">
      {character.map((item) => (
        //console.log(item)
        <Cardinfo data={item} />
      ))}
    </div>
  );
}
