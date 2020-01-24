import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Cardinfo from "./Cardinfo.js";

const CardDesign = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

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
    <CardDesign className="card-container">
      {character.map((item) => (
        //console.log(item)
        <Cardinfo data={item} />
      ))}
    </CardDesign>
  );
}
