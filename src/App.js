import React from "react";
import "./App.css";
import PhotoCard from "./Component/PhotoCard";
import Header from "./Component/Header"
function App() {
  return (
    <div className="App">
    <Header/>
      <PhotoCard/>
    </div>
  );
}

export default App;
