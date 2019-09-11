import React from "react";

export default function NameImg(props) {
  return (
    <div>
      <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.explanation}</p>
    </div>
  );
}
