import React, {useEffect, useState} from "react";
import axios from "axios";
import NasaImg from "./NasaImg"


function PhotoCard() {
    const [ image, setImage ] = useState();
    const [ title, setTitle] = useState();
  
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then((res) => {
            setImage(res.data.url);
            setTitle(res.data.title)
            return res;
        })
        .then((res) => {
          console.log(res.data)
        })
        .catch( (error) =>{
            console.log(error);
          })
    }, [])
  
    return (
      <div>
        <header />
        <div >
          <NasaImg image={image} title={title}/>
          <a href="https://www.nasa.gov/"> Courtesy NASA.gov</a>
        </div>
      </div>
    );
  }
  
  export default PhotoCard;