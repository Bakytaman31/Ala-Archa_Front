import React, { useState } from 'react';

function Services() {
    const [service, setService] = useState("kyrgyzCity");

    let scene = "";

    const kyrgyzCity = (<div className='kyrgyzCity'>
        <div className='image'>
            <img src={kyrgyzCity} alt='#'/>
        </div>
        <div className='description'>
            <h3>Кыргызский городок</h3>
            <p>Описание: <span>10</span> юрт в виде полусолнца</p>
            <span>Открытие в Мае</span> 
        </div>
    </div>);

    switch(service) {
        case 'kyrgyzCity':
            scene = kyrgyzCity;
            break;
        default:
            scene = kyrgyzCity;

    }

  return (
    <div className='services'>
        {scene}
    </div>
  )
}

export default Services;