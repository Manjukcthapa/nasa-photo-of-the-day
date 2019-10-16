import React, { useState, useEffect } from "react";
import "./App.css";
import ImageList from "./Component/ImageList";
import Header from "./Component/Header";
import Input from "./Component/Input";
import Info from "./Component/Info";
import axios from "axios";
import styled from "styled-components";
import Footer from "./Component/footer";

const Wrapper = styled.div`
height:950px;
width:1000px;
border:2px solid grey;
margin-left:120px;
margin-top:60px;
display: block;
background-color: #061f4a;
`

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
        <Wrapper className="photocard">
          <ImageList src={data.url} alt={data.title} />
          <Info
            title={data.title}
            copyright={data.copyright}
            explanation={data.explanation}
          />
        </Wrapper>
      </div>
      <Input date={data.date} handler={setDate} />
      <Footer/>
    </div>
  );
}

export default App;
