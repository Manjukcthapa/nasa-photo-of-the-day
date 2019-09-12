import React, {useState, useEffect}from "react";
import "./App.css";
import Image from "./Component/Image";
import Header from "./Component/Header";
import Footer from "./Component/footer";
import Input from "./Component/Input"
import axios from "axios";
function App() {
    // var
    const [data, setData] = useState({})
    const [date, setDate] = useState('')
  
    useEffect(()=>{
      // commented out to prevent API over-usage
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=74Cyf1i7aAfIDPJPSNGUt622Dn3c072942FuCQ17${date?`&date=${date}`:''}`)
          .then(resp=>{
              //console.log(resp)
              setData(resp.data)
          })
          .catch(err=>{
              console.error(err)
          })
  
    },[date])
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
     
      <div className="photocard">
      <Image src={data.url} alt={data.title} hdurl={data.hdurl} />
      </div>
      <Input date={data.date} handler={setDate} />
     
    </div>
  );
}

export default App;
