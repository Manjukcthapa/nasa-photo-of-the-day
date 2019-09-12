import React from 'react'

export default function Info(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.explanation}</p>
        </div>
    )
}
