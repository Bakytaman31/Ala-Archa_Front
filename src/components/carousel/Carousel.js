import React from "react";
import { Carousel } from "3d-react-carousal";
import carousel1 from "../../assets/slider_IMG1.png";
import carousel2 from "../../assets/slider_IMG2.png";
import carousel3 from "../../assets/slider_IMG3.png";
import carousel4 from "../../assets/slider_IMG4.png";
// import "./Carousel.css";

const Caroгsel = () => {
  let slides = [
    <img src={carousel1} alt="1" />,
    <img src={carousel2} alt="2" />,
    <img src={carousel3} alt="3" />,
    <img src={carousel4} alt="4" />,
    <img src={carousel2} alt="5" />,
  ];

  const callback = function (index) {
    console.log("callback", index);
  };

  return (
    <center>
      <Carousel
        style={{ background: "none" }}
        slides={slides}
        autoplay={true}
        interval={2000}
        onSlideChange={callback}
      />
    </center>
  );
};

export default Caroгsel;
