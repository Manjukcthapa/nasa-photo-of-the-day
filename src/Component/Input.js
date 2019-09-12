import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css"

const Div = styled.div`
  margin-top: 40px;
  margin-left: 300px;
`;

const Inputs = styled.input`
 width:200px;
 height:50px;
 font-size:18px;
 background-color:#046b99;
 box-sizing: border-box;
 border:1px solid black;
 border-radius: 60px;
 font-weight: 100;
 color: ${props => props.inputColor || "purple"};
 letter-spacing: 0.01em;
 position: relative;
 text-align:center;
 color:white;
`;

const Span = styled.span`
    font-size:25px;
    font-weight: bold;
    color:white;
`

export default function Input(props) {
  const [today] = useState(new Date().toISOString().replace(/T.+/, ""));

  useEffect(() => {
    const input = document.querySelector("input");
    if (!input.value) input.value = props.date;

    function setDate() {
      if (input.value && new Date(input.value) <= new Date(today)) {
        //console.log('setDate', input.value)
        props.handler(input.value);
      }
    }

    input.addEventListener("input", setDate);

    return () => {
      input.removeEventListener("input", setDate);
    };
  }, [today, props]);

  const changeColor = () => {
      const input = document.querySelector("input");
      input.classList.add("red");
      console.log(input)
  }

  return (
    <Div>
      <Span>Astronomy Picture of the Day: </Span>
      <Inputs onMouseOver={() => { changeColor() }} type="date" max={today}  inputColor="black"/>
    </Div>
  );
}
