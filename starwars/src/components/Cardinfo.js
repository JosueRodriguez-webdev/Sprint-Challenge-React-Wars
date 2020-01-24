import React from "react";
import styled from "styled-components";

import Card from "./Card.js";

const CardinfoDesign = styled.div`
  border: 1px solid black;
  width: 20%;
  padding: 2% 0 4% 0;
  margin-bottom: 3%;
  background-color: #f18973;
`;

export default function Cardinfo(props) {
  const PD = props.data;

  return (
    <CardinfoDesign className="card-layout">
      <h1>{PD.name}</h1>
      <p> Info:</p>
      <div className="info">
        <p>gender: {PD.gender}</p>
        <p>height: {PD.height}</p>
        <p>mass: {PD.height}</p>
        <p>birth-year: {PD.birth_year}</p>
      </div>
    </CardinfoDesign>
  );
}
