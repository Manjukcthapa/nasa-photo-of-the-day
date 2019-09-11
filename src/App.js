import React from "react";
import "./App.css";
import PhotoCard from "./Component/PhotoCard";
import Header from "./Component/Header";
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="photocard">
        <PhotoCard />
      </div>
    </div>
  );
}

export default App;
