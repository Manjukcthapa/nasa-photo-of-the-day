import React from "react";
import "./Nasapic.css"; 
export default function NameImg(props) {
  return (
    <div className='cards'>
      <img  className="imagelist" src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.explanation}</p>
    </div>
  );
}
