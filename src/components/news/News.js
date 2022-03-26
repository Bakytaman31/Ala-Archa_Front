import React from 'react'
import './News.css';
import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';
import news4 from '../../assets/news4.png';
import news5 from '../../assets/news5.png';

function News() {
  return (
    <div className='news'>
        <p className='title'>Новости</p>
        <div className='newsBlocks'>
            <div className='smallBlock'>
                <img src={news1} alt='#'/>
                <img src={news2} alt='#'/>
            </div>
            <div className='bigBlock'>
                <img src={news3} alt='#'/>
            </div>
            <div className='smallBlock'>
                <img src={news4} alt='#'/>
                <img src={news5} alt='#'/>
            </div>
        </div>
    </div>
  )
}

export default News;