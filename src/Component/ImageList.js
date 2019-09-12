import React from "react";
import styled from "styled-components";

const Photo = styled.img`
height: 500px;
width: 600px;
margin-left: 190px;
margin-top: 80px;
border: 10px solid grey;
`


export default function ImageList(props) {
  return (
    <div>
      <Photo src={props.src} alt={props.alt} />
    </div>
  );
}
