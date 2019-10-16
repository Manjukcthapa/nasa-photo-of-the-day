import React from "react";
import styled from "styled-components";

const Div = styled.div`
height:100px;
width:100%;
margin-top:40px;
background-color: #046b99;
`
const Span = styled.span`
margin-left:550px;
text-align:center;
margin-bottom:30px;
`
const Link = styled.a`
color: ${props => props.inputColor || "purple"};
margin-top:50px;

`

function Footer() {
  return (
    <Div className="img">
      <Link inputColor="#c5c5c5"  margintop="100px;" href="https://www.nasa.gov/"> <Span>Courtesy NASA.gov</Span></Link>
    </Div>
  );
}

export default Footer;
