import React from "react";
import News from "../components/news/News.js";
import Map from "../components/map/Map.js";
import Carorsel from "../components/carousel/Carousel.js";

const MainPage = () => {
  return (
    <div>
      <Carorsel />
      <News />
      <Map />
    </div>
  );
};

export default MainPage;
