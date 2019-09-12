import React, { useState, useEffect } from "react";
import "./App.css";
import ImageList from "./Component/ImageList";
import Header from "./Component/Header";
import Input from "./Component/Input";
import Info from "./Component/Info";
import axios from "axios";
function App() {
  // var
  const [data, setData] = useState({});
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=74Cyf1i7aAfIDPJPSNGUt622Dn3c072942FuCQ17${
          date ? `&date=${date}` : ""
        }`
      )
      .then(resp => {
        setData(resp.data);
        console.log(resp.data)
      })
      .catch(err => {
        console.error(err);
      });
  }, [date]);
  return (
    <div>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="photocard">
          <ImageList src={data.url} alt={data.title} />
          <Info
            title={data.title}
            copyright={data.copyright}
            explanation={data.explanation}
          />
        </div>
      </div>
      <Input date={data.date} handler={setDate} />
    </div>
  );
}

export default App;
