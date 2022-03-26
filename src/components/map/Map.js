import React from 'react';
import './Map.css';
import mapImg from '../../assets/map.png';

function Map() {
  return (
    <div className='map'>
        <p className='title'>Карта национального парка Ала-Арча</p>
        <p className='subtext'>Lörem ipsum tibelt vakåv men benädibelt. Ände antesevis esa hakire. Pogisk od jag dona, berektig. Kåråde spekaktiga med on hande. Dir tenade, reation syck i blåljusyrke. </p>
        <img src={mapImg} alt="#"/>
    </div>
  )
}

export default Map;
