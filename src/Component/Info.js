import React from 'react'
import styled from "styled-components"; 
 
const Paragraph = styled.p`
width: 100%;
font-family: italic;
padding: 2px;
font-size: 22px;
color:white;
`
const H1 = styled.h1`
margin-left:250px;
color:white;
`

export default function Info(props) {
    return (
        <div>
            <H1>{props.title}</H1>
            <Paragraph>{props.explanation}</Paragraph>
        </div>
    )
}
