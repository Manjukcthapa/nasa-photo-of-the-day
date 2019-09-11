import React, {useEffect, useState} from "react";
import axios from "axios";
import NasaImg from "./NasaImg"
import Date from "./Date"

function PhotoCard() {
    const [ image, setImage ] = useState();
    const [ title, setTitle] = useState();
    const [ date, setDate ] = useState();
    const [ story, setStory ] = useState();
  
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=74Cyf1i7aAfIDPJPSNGUt622Dn3c072942FuCQ17')
        .then((res) => {
            setImage(res.data.url);
            setTitle(res.data.title);
            setStory(res.data.explanation);
            return res;
        })
        .then((res) => {
            setDate(res.data.date);
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
        <Date date={date} />
          <NasaImg image={image} title={title} explanation={story} />
          <a href="https://www.nasa.gov/"> Courtesy NASA.gov</a>
        </div>
      </div>
    );
  }
  
  export default PhotoCard;