import React from "react";
import styled from "styled-components";

const Photo = styled.img`
height: 500px;
width: 600px;
margin-left: 100px;
margin-top: 70px;
border: 10px solid transparent;
`


export default function ImageList(props) {
  return (
    <div>
      <Photo src={props.src} alt={props.alt} />
    </div>
  );
}
