import React from "react";

import Card from "./Card.js";

export default function Cardinfo(props) {
  return (
    <div className="card-layout">
      <div>
        <h1>{props.data.name}</h1>
      </div>
    </div>
  );
}
