import React, {useEffect, useState} from "react";
import axios from "axios";


const PhotoCard = () => {
    let imgURl= null;
    const [imgValue, setImgValue] = useState ("");

    useEffect(() => {
        //to request information from the server
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=74Cyf1i7aAfIDPJPSNGUt622Dn3c072942FuCQ17`)        
        //if successful
        .then(success => {
            console.log('Success');
            imgURl = success.data.url;
            console.log(imgURl)
            setImgValue(imgURl);
        })
        //if not successful
        .catch(failure => {
            console.log('Failure');
        })
    }, [])

 
    return (
        <div>
            <h1>
                Hello
            </h1>
        </div>
    )
}

export default PhotoCard;