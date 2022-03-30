import React from "react";
import "./Map.css";
import mapImg from "../../assets/map.png";

function Map() {
  return (
    <div className="map">
      <h4 className="title">Карта национального парка Ала-Арча</h4>
      <h4 className="subtext">
        Lörem ipsum tibelt vakåv men benädibelt. Ände antesevis esa hakire.
        Pogisk od jag dona, berektig. Kåråde spekaktiga med on hande. Dir
        tenade, reation syck i blåljusyrke.{" "}
      </h4>
      <img src={mapImg} alt="#" />
    </div>
  );
}

export default Map;
