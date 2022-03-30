import React from "react";
import News from "../components/news/News.js";
import Map from "../components/map/Map.js";
import Carorsel from "../components/carousel/Carousel.js";
import "../App.css";

const MainPage = () => {
  return (
    <center>
      <div className="MainPage_container">
        <Carorsel />
        <News />
        <Map />
      </div>
    </center>
  );
};

export default MainPage;
