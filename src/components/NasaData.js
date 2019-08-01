import React, { useState } from "react";

export default function NasaData(props) {

  const [nasaState, setNasaState] = useState([]);

  return (
    <div>
      <h1>{props.copyright}</h1>
      <h3>{props.title}</h3>
      <h4>{props.date}</h4>
      <img src={props.img}></img>
      <p>{props.par}</p>
    </div>
  )
}