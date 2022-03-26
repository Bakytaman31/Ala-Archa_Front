import React from 'react';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import './Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='partners'>
            <img src={logo1} alt='#'/>
            <img src={logo2} alt='#'/>
            <img src={logo3} alt='#'/>
            <img src={logo4} alt='#'/>
            <img src={logo1} alt='#' style={{"margin-left": "6rem"}}/>
            <img src={logo2} alt='#'/>
            <img src={logo3} alt='#'/>
            <img src={logo4} alt='#'/>
        </div>
        <div className='footerContent'>
            <p className='logo'>LOGO</p>
            <div className='moreContent'>
                <p>Узнать больше</p>
                <ul>
                    <li><a href='#'>О нас</a></li>
                    <li><a href='#'>Природа</a></li>
                    <li><a href='#'>Вакансии</a></li>
                    <li><a href='#'>Свяжитесь с нами</a></li>
                </ul>
            </div>
            <div className='contacts'>
                <p>Контакты</p>
                <ul>
                    <li>Отель <span>+996 123 456 789</span></li>
                    <li>Вход <span>+996 123 456 789</span></li>
                </ul>
            </div>
            <div className='media'>
                <p>Медиа</p>
                <ul className='mediaList'>
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                    <li><FaYoutube/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;
