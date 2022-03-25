import React from 'react'
import './Header.css';
import {FaUserAlt} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import FlagRu from '../../assets/russia.png';

function Header() {
  return (
    <div className='wrapper'>
      <nav className='navbar'>
        <span className='logo'>LOGO</span>
        <div className='links'>
          <ul>
            <li>
              <a href='#'>Главная</a>
            </li>
            <li>
              <a href='#'> О нас</a>
            </li>
            <li>
              <a href='#'>Услуги</a>
            </li>
            <li>
              <a href='#'>Контакты</a>
            </li>
          </ul>
        </div>
        <div className='icons'>
          <ul>
            <li>
              <a href='#'><FaSearch/></a>
            </li>
            <li>
              <a href='#'><FaUserAlt/></a>
            </li>
            <li>
              <a href='#'><img src={FlagRu} alt='#'/><span style={{marginLeft: "7px"}}>РУС</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='wrapperText'>
        <p className='title'>Ала-Арча</p>
        <p className='subTitle'>Национальный парк</p>
        <button>Узнать больше</button>
      </div>
    </div>
  )
}

export default Header;
