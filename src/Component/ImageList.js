import React from "react";

export default function ImageList(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
